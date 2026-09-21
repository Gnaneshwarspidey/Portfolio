import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { CERTIFICATIONS } from '../data/portfolioData';
import { stagger, staggerChild, VIEWPORT } from '../hooks/useMotion';
import {
  Wifi,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowUpRight,
  BadgeCheck,
  ScanLine,
} from 'lucide-react';

const CertificationCard = ({ cert, index, IconComponent }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [spotlight, setSpotlight] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`
    );

    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransform(
      'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    );

    setSpotlight({
      x: 50,
      y: 50,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={staggerChild}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 180ms ease-out',
      }}
      className="group relative h-full"
    >
      {/* Animated Gradient Border */}
      <div className="absolute -inset-[1px] rounded-[1.05rem] bg-gradient-to-r from-blue-500/0 via-cyan-400/0 to-indigo-500/0 opacity-0 blur-[2px] transition-all duration-500 group-hover:from-blue-500/70 group-hover:via-cyan-400/60 group-hover:to-indigo-500/70 group-hover:opacity-100" />

      {/* Card */}
      <div className="relative h-full overflow-hidden rounded-2xl border border-slate-800/90 bg-dark-900/80 backdrop-blur-xl">
        
        {/* Cursor Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(
              280px circle at ${spotlight.x}% ${spotlight.y}%,
              rgba(59, 130, 246, 0.14),
              transparent 70%
            )`,
          }}
        />

        {/* Top Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.5) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Scan Line */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            y: ['0%', '900%'],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="relative z-10 p-6 sm:p-7 flex h-full flex-col justify-between">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between gap-3 mb-6">
              
              {/* Certificate Number */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono tracking-widest text-blue-400/80">
                  CERT_{String(index + 1).padStart(2, '0')}
                </span>

                <div className="h-px w-8 bg-slate-800" />
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                  Verified
                </span>
              </div>
            </div>

            {/* Icon + Issuer */}
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                }}
                className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/25 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/5"
              >
                {/* Icon Glow */}
                <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <IconComponent className="relative z-10 h-6 w-6" />
              </motion.div>

              <div className="min-w-0">
                <span className="mb-1.5 inline-flex items-center rounded-md border border-slate-800 bg-dark-950 px-2 py-1 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  {cert.issuer}
                </span>

                <h3 className="text-base sm:text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-blue-300">
                  {cert.title}
                </h3>

                <p className="mt-1.5 text-xs text-slate-400">
                  {cert.category}
                </p>
              </div>
            </div>

            {/* Credential Visualization */}
            <div className="relative mt-7 overflow-hidden rounded-xl border border-slate-800/80 bg-dark-950/70 p-4">
              <div className="flex items-center justify-between">
                
                <div className="flex items-center gap-3">
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/5">
                    <BadgeCheck className="h-4 w-4 text-blue-400" />

                    <motion.div
                      className="absolute inset-0 rounded-lg border border-blue-400/30"
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </div>

                  <div>
                    <p className="text-xs font-mono tracking-wider text-slate-500">Credential Status</p>
                    <p className="mt-0.5 text-xs font-semibold text-slate-200">
                      Authenticated Program
                    </p>
                  </div>
                </div>

                <ScanLine className="h-4 w-4 text-slate-600 transition-colors duration-300 group-hover:text-blue-400" />
              </div>

              {/* Progress-style line */}
              <div className="mt-4 h-px overflow-hidden bg-slate-800">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.12,
                    ease: 'easeOut',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 border-t border-slate-800/70 pt-4">
            <div className="flex items-center justify-between gap-3">
              
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Issued By
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-300">
                  {cert.issuer}
                </p>
              </div>

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 5,
                }}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-dark-950 text-slate-500 transition-all duration-300 group-hover:border-blue-500/30 group-hover:text-blue-400"
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Glow */}
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
};

export const Certifications = () => {
  const iconMap = {
    Wifi,
    ShieldCheck,
    Smartphone,
    Sparkles,
  };

  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-y border-slate-800/60 bg-dark-900/40 py-24"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-10 right-[10%] h-80 w-80 rounded-full bg-indigo-600/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.7) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Verified Credentials"
          title="Certifications & Programs"
          subtitle="Accredited programs across IoT, Cybersecurity, Mobile Development, and Artificial Intelligence."
        />

        {/* Certification Grid */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2"
        >
          {CERTIFICATIONS.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || Award;

            return (
              <CertificationCard
                key={cert.id}
                cert={cert}
                index={index}
                IconComponent={IconComponent}
              />
            );
          })}
        </motion.div>

        {/* Credential Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-10 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-dark-950/50 px-5 py-4 backdrop-blur-xl">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/5">
                  <Award className="h-4 w-4 text-blue-400" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Continuous Learning
                  </p>
                  <p className="text-xs text-slate-500">Building knowledge across emerging technologies</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {CERTIFICATIONS.length} Credentials Listed
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
