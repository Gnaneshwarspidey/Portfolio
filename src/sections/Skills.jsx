import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { fadeUp, VIEWPORT } from '../hooks/useMotion';
import {
  Code2,
  Layout,
  Server,
  Database,
  BrainCircuit,
  BarChart3,
  Wrench,
  CheckCircle,
  Cpu,
} from 'lucide-react';

export const Skills = () => {
  const iconMap = {
    Code2, Layout, Server, Database, BrainCircuit, BarChart3, Wrench,
  };

  return (
    <section id="skills" className="py-24 relative bg-dark-950 border-y border-white/[0.06]">
      
      {/* Background Ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[10%] top-1/3 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="Technical Skills"
          title="Skills & Technologies"
          description="Categorized technical competencies across programming, AI/ML, web development, data, and tools."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const IconComponent = iconMap[category.icon] || Cpu;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-900/90 p-6 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.06]">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-amber-300">
                        {category.name}
                      </h3>
                      <span className="text-[11px] font-mono text-zinc-500">
                        {category.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="group/badge px-3 py-1.5 rounded-lg bg-dark-950 border border-zinc-800 text-xs font-medium text-zinc-300 hover:border-amber-500/30 hover:text-amber-300 transition-all flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70 group-hover/badge:bg-amber-400 transition-colors" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section-level competency legend */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs font-mono text-zinc-400">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>All listed skills represent verified practical competencies</span>
        </div>

      </div>
    </section>
  );
};
