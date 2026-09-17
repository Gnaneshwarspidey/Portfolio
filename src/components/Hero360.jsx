import React, { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/profile.jpg';
import { PERSONAL_INFO } from '../data/portfolio360Data';
import { ArrowDown, Sparkles, Terminal } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero360 = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = profileImg;

    // Set canvas dimensions
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const renderTurntable = (angleDegrees) => {
      if (!canvas || !ctx || !img.complete) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cw = canvas.width;
      const ch = canvas.height;
      const rad = (angleDegrees * Math.PI) / 180;

      // Realistic 3D turntable projection simulation
      // cos(rad) dictates horizontal scale (perspective projection)
      // sin(rad) dictates depth / shading / rim light intensity
      const cosVal = Math.cos(rad);
      const sinVal = Math.sin(rad);

      const scaleX = Math.abs(cosVal);
      const isBack = cosVal < 0;

      ctx.save();
      ctx.translate(cw / 2, ch / 2);

      // 3D perspective shadow on the ground
      ctx.save();
      ctx.scale(1, 0.2);
      ctx.beginPath();
      ctx.arc(0, ch * 1.6, Math.min(cw, ch) * 0.35 * (0.8 + 0.2 * scaleX), 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
      ctx.filter = 'blur(15px)';
      ctx.fill();
      ctx.restore();

      // Compute image drawing boundaries (75-85% viewport height subject)
      const targetHeight = ch * 0.82;
      const imgRatio = img.width / img.height;
      const targetWidth = targetHeight * imgRatio;

      // Apply horizontal compression for turntable rotation
      ctx.scale(scaleX || 0.01, 1);

      // Draw portrait
      ctx.drawImage(
        img,
        -targetWidth / 2,
        -targetHeight / 2,
        targetWidth,
        targetHeight
      );

      // Dynamic cinematic lighting overlay based on angle
      // 0deg = full front, 90deg/270deg = edge rim, 180deg = silhouette depth
      if (isBack) {
        // Back silhouette & depth shading
        const depthOpacity = Math.min(0.75, Math.abs(cosVal) * 0.6 + 0.3);
        ctx.fillStyle = `rgba(11, 15, 23, ${depthOpacity})`;
        ctx.fillRect(-targetWidth / 2, -targetHeight / 2, targetWidth, targetHeight);

        // High-tech subtle grid texture on the reverse view
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.15)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = -targetWidth / 2; x < targetWidth / 2; x += 30) {
          ctx.moveTo(x, -targetHeight / 2);
          ctx.lineTo(x, targetHeight / 2);
        }
        ctx.stroke();
      } else {
        // Subtle front ambient lighting gradient
        const rimGlow = Math.abs(sinVal);
        if (rimGlow > 0.05) {
          const grad = ctx.createLinearGradient(-targetWidth / 2, 0, targetWidth / 2, 0);
          grad.addColorStop(0, `rgba(59, 130, 246, ${rimGlow * 0.25})`);
          grad.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
          grad.addColorStop(1, `rgba(6, 182, 212, ${rimGlow * 0.25})`);
          ctx.fillStyle = grad;
          ctx.fillRect(-targetWidth / 2, -targetHeight / 2, targetWidth, targetHeight);
        }
      }

      ctx.restore();
    };

    img.onload = () => renderTurntable(0);

    // GSAP ScrollTrigger pinning 360 degree turntable sequence
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=2500', // Smooth extended scroll distance for 360 sequence
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        const deg = progress * 360;
        setRotationAngle(Math.round(deg));
        renderTurntable(deg);

        // Fade out indicator
        if (scrollIndicatorRef.current) {
          scrollIndicatorRef.current.style.opacity = Math.max(0, 1 - progress * 4);
        }

        // Staggered text shift
        if (textRef.current) {
          textRef.current.style.transform = `translateY(${progress * -30}px)`;
        }
      },
    });

    return () => {
      trigger.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-screen bg-dark-950 flex items-center justify-center overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-600/10 via-transparent to-dark-950 pointer-events-none"></div>

      {/* 360 Degree Canvas Viewport */}
      <div className="absolute inset-0 flex items-center justify-center z-10" data-cursor="explore">
        <canvas ref={canvasRef} className="w-full h-full object-contain pointer-events-auto cursor-grab active:cursor-grabbing" />
      </div>

      {/* Floating Minimal Editorial Typography around subject */}
      <div
        ref={textRef}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-between h-full py-28 pointer-events-none"
      >
        {/* Top Minimal Label */}
        <div className="flex items-center justify-between pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>CREATIVE DEVELOPER • AI & FULL-STACK</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <span>TURNTABLE: {rotationAngle}° / 360°</span>
          </div>
        </div>

        {/* Center / Lower Editorial Title */}
        <div className="max-w-xl pointer-events-auto">
          <div className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">
            {PERSONAL_INFO.brandName} • {PERSONAL_INFO.name}
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white leading-none mb-4 uppercase">
            {PERSONAL_INFO.headline}
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md mb-6 font-normal">
            {PERSONAL_INFO.supportingText}
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#work"
              data-cursor="view"
              className="px-6 py-3 rounded-full bg-white text-dark-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all active:scale-95 shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              data-cursor="link"
              className="px-6 py-3 rounded-full bg-transparent text-white border border-white/20 hover:border-white text-xs font-bold uppercase tracking-wider transition-all active:scale-95"
            >
              Let's Work Together
            </a>
          </div>
        </div>

        {/* Bottom Scroll to Explore Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs text-slate-400 pointer-events-auto"
        >
          <div className="flex items-center gap-2">
            <span>SCROLL TO EXPLORE 360°</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-blue-400" />
          </div>
          <div className="text-[11px] text-slate-400">
            {PERSONAL_INFO.roleSubtitle}
          </div>
        </div>
      </div>
    </section>
  );
};

