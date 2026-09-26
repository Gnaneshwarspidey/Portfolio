import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { EXPERIENCE } from '../data/portfolioData';
import { fadeUp, VIEWPORT } from '../hooks/useMotion';

import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Building2,
  ArrowUpRight,
  Sparkles,
  Activity,
  Code2,
} from 'lucide-react';


/* ---------------------------------------
   Experience Card Component
---------------------------------------- */

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="relative pl-10 sm:pl-14"
    >
      {/* Timeline Node */}
      <div className="absolute left-0 top-7 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-amber-500/30 bg-dark-950 shadow-md">
        <span className="h-2 w-2 rounded-full bg-amber-400" />
      </div>

      {/* Main Card */}
      <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1">
        
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            {/* Company Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
              <Briefcase className="h-5 w-5" />
            </div>

            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                  Experience 0{index + 1}
                </span>
                <span className="h-1 w-1 rounded-full bg-zinc-600" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  Internship
                </span>
              </div>

              <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-md border border-amber-500/20 bg-amber-500/5 px-2.5 py-0.5 font-mono text-xs text-amber-300 font-semibold">
                <Activity className="h-3 w-3" />
                {exp.type}
              </div>

              <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-amber-300">
                {exp.role}
              </h3>

              <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <Building2 className="h-3.5 w-3.5 text-zinc-500" />
                <span>{exp.company}</span>
              </div>
            </div>
          </div>

          {/* Date Badge */}
          <div className="flex w-fit items-center gap-2 rounded-xl border border-zinc-800 bg-dark-950 px-3 py-1.5 font-mono text-xs text-zinc-400">
            <Calendar className="h-3.5 w-3.5 text-amber-400" />
            {exp.period}
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-white/[0.06]" />

        {/* Two-column body layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Summary */}
          <div className="relative">
            <div className="absolute -left-1 top-0 h-full w-0.5 bg-gradient-to-b from-amber-400 via-amber-500/20 to-transparent" />
            <p className="pl-4 text-xs sm:text-sm leading-relaxed text-zinc-300">
              {exp.summary}
            </p>
          </div>

          {/* Contributions */}
          <div>
            <div className="mb-2.5 flex items-center gap-2">
              <Code2 className="h-4 w-4 text-amber-400" />
              <h4 className="font-mono text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                Key Contributions
              </h4>
            </div>

            <div className="space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-lg border border-white/[0.04] bg-dark-950 p-2.5"
                >
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                  <span className="text-xs leading-relaxed text-zinc-300">
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-5 border-t border-white/[0.06] pt-4">
          <div className="mb-2 flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span className="font-mono text-xs tracking-wider text-zinc-500 uppercase">
              Technology Stack
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {exp.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-zinc-800 bg-dark-950 px-2.5 py-1 font-mono text-xs text-zinc-300 hover:border-amber-500/30 hover:text-amber-300 transition-colors"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};


/* ---------------------------------------
   Experience Section
---------------------------------------- */

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-y border-white/[0.06] bg-dark-950 py-24"
    >
      {/* Background Ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-20 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="Career Journey"
          title="Work Experience"
          description="Hands-on experience applying machine learning algorithms, software development, and structured problem-solving."
        />

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Vertical Line */}
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-zinc-800 sm:left-[15px]" />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${index}`}
                exp={exp}
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
