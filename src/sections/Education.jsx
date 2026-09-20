import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { EDUCATION } from '../data/portfolioData';
import { stagger, staggerChild, VIEWPORT } from '../hooks/useMotion';
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Layers3,
  ArrowUpRight,
} from 'lucide-react';

const EducationCard = () => {
  const cardRef = useRef(null);

  const [transform, setTransform] = useState(
    'perspective(1400px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
  );

  const [spotlight, setSpotlight] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (event) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 7;
    const rotateX = ((y / rect.height) - 0.5) * -7;

    setTransform(
      `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`
    );

    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransform(
      'perspective(1400px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    );

    setSpotlight({
      x: 50,
      y: 50,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 180ms ease-out',
      }}
      className="group relative"
    >
      {/* Animated outer glow */}
      <div className="absolute -inset-[1px] rounded-[1.1rem] bg-gradient-to-r from-blue-500/0 via-cyan-400/0 to-indigo-500/0 opacity-0 blur-[3px] transition-all duration-500 group-hover:from-blue-500/70 group-hover:via-cyan-400/60 group-hover:to-indigo-500/70 group-hover:opacity-100" />

      {/* Main card */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-dark-900/80 backdrop-blur-xl">
        
        {/* Cursor spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(
              350px circle at ${spotlight.x}% ${spotlight.y}%,
              rgba(59,130,246,0.15),
              transparent 70%
            )`,
          }}
        />

        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.8) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />

        {/* Moving scan line */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            y: ['0%', '900%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="relative z-10 p-6 sm:p-8">
          
          {/* Top status row */}
          <div className="mb-7 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-[0.2em] text-blue-400/80">
                ACADEMIC_PROFILE
              </span>

              <div className="h-px w-10 bg-slate-800" />
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
                {EDUCATION.status}
              </span>
            </div>
          </div>

          {/* Degree header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            
            <div className="flex items-start gap-4">
              
              {/* Animated graduation icon */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: -4,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                }}
                className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/25 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/5"
              >
                <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <GraduationCap className="relative z-10 h-7 w-7" />
              </motion.div>

              <div>
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-dark-950 px-2.5 py-1">
                  <BookOpen className="h-3 w-3 text-blue-400" />

                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    Engineering Degree
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                  {EDUCATION.degree}
                </h3>

                <p className="mt-2 text-sm font-medium text-blue-400">
                  Specialization: {EDUCATION.specialization}
                </p>
              </div>
            </div>

            {/* Decorative indicator */}
            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-dark-950/70 text-slate-600"
            >
              <Layers3 className="h-5 w-5" />
            </motion.div>
          </div>

          {/* Divider */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-800/80" />

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600">
              <Sparkles className="h-3 w-3 text-blue-400" />
              Academic Focus
            </div>

            <div className="h-px flex-1 bg-slate-800/80" />
          </div>

          {/* Focus areas */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                Key Academic & Applied Focus Areas
              </h4>

              <span className="hidden font-mono text-xs text-slate-600 sm:block">
                {String(EDUCATION.focusAreas.length).padStart(2, '0')} AREAS
              </span>
            </div>

            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {EDUCATION.focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={staggerChild}
                  whileHover={{
                    y: -3,
                    scale: 1.01,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="group/area relative overflow-hidden rounded-xl border border-slate-800/80 bg-dark-950/60 p-4"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover/area:opacity-100" />

                  <div className="relative z-10 flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-500/15 bg-blue-500/5">
                      <CheckCircle2 className="h-4 w-4 text-blue-400" />
                    </div>

                    <span className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {area}
                    </span>

                    <ArrowUpRight className="ml-auto h-3.5 w-3.5 shrink-0 text-slate-700 transition-all duration-300 group-hover/area:-translate-y-0.5 group-hover/area:translate-x-0.5 group-hover/area:text-blue-400" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom status */}
          <div className="mt-7 border-t border-slate-800/70 pt-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />

                <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                  AI & ML Engineering Track
                </span>
              </div>

              <span className="font-mono text-xs text-slate-600">
                LEARNING • BUILDING • APPLYING
              </span>
            </div>
          </div>
        </div>

        {/* Bottom ambient glow */}
        <div className="pointer-events-none absolute -bottom-24 left-1/2 h-40 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
};

export const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute bottom-0 right-[12%] h-80 w-80 rounded-full bg-indigo-600/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.8) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Foundation"
          title="Education"
          subtitle="Specialized undergraduate curriculum in Artificial Intelligence and Machine Learning."
        />

        <div className="mx-auto max-w-4xl">
          <EducationCard />
        </div>
      </div>
    </section>
  );
};
