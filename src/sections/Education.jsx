import React from 'react';
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative"
    >
      {/* Main card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-zinc-700">
        <div className="relative z-10">
          
          {/* Top status row */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-amber-400/90 font-semibold">
                ACADEMIC_PROFILE
              </span>
              <div className="h-px w-8 bg-zinc-800" />
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1">
              <span className="relative flex h-2 w-2">
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
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400 shadow-md">
                <GraduationCap className="h-6 w-6" />
              </div>

              <div>
                <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-dark-950 px-2.5 py-0.5">
                  <BookOpen className="h-3 w-3 text-amber-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Engineering Degree
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                  {EDUCATION.degree}
                </h3>

                <p className="mt-1 text-xs sm:text-sm font-semibold text-amber-400">
                  Specialization: {EDUCATION.specialization}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-800" />
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              Academic Focus
            </div>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          {/* Focus areas */}
          <div>
            <div className="mb-3.5 flex items-center justify-between">
              <h3 className="text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase">
                Key Academic & Applied Focus Areas
              </h3>
              <span className="hidden font-mono text-xs text-zinc-500 sm:block">
                0{EDUCATION.focusAreas.length} AREAS
              </span>
            </div>

            <motion.div
              variants={stagger(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="grid grid-cols-1 gap-2.5 sm:grid-cols-2"
            >
              {EDUCATION.focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={staggerChild}
                  whileHover={{ y: -2 }}
                  className="group/area relative overflow-hidden rounded-xl border border-zinc-800 bg-dark-950 p-3.5 transition-all hover:border-amber-500/30 hover:bg-dark-900"
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-500/15 bg-amber-500/5">
                      <CheckCircle2 className="h-4 w-4 text-amber-400" />
                    </div>

                    <span className="text-xs leading-relaxed text-zinc-300">
                      {area}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-y border-white/[0.06] bg-dark-950 py-24"
    >
      {/* Background Ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[15%] top-24 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Foundation"
          title="Education"
          description="Specialized undergraduate curriculum in Artificial Intelligence and Machine Learning."
        />

        <div className="mx-auto max-w-4xl">
          <EducationCard />
        </div>
      </div>
    </section>
  );
};
