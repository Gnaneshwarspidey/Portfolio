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
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="Technical Skills"
          title="Skills & Technologies"
          subtitle="Categorized technical competencies across programming, AI/ML, web development, data, and tools."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => {
            const IconComponent = iconMap[category.icon] || Cpu;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.3 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                }}
                className="glass-card glass-card-hover cursor-spotlight p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-800/80">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {category.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="group/badge px-3 py-1.5 rounded-lg bg-dark-950/80 hover:bg-blue-950/40 border border-slate-800/90 hover:border-blue-500/40 text-xs font-medium text-slate-300 hover:text-blue-300 transition-all flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 group-hover/badge:bg-blue-400 transition-colors" />
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
        <div className="mt-10 flex items-center justify-center gap-2 text-xs font-mono text-slate-500">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>All listed skills represent verified competencies</span>
        </div>

      </div>
    </section>
  );
};
