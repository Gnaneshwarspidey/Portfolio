import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { fadeUp, stagger, staggerChild, VIEWPORT } from '../hooks/useMotion';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  BarChart3, 
  Wrench,
  CheckCircle,
  Cpu
} from 'lucide-react';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    Code2, Layout, Server, Database, BrainCircuit, BarChart3, Wrench,
  };

  const filteredCategories = activeCategory === 'all' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Skills"
          title="Skills & Technologies"
          subtitle="Categorized technical competencies across programming, AI/ML, web development, data, and tools."
        />

        {/* Category Filter Chips */}
        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          <motion.button
            variants={staggerChild}
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-dark-900/80 text-slate-400 hover:text-white hover:bg-dark-850 border border-slate-800'
            }`}
          >
            All Categories ({SKILL_CATEGORIES.length})
          </motion.button>
          {SKILL_CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              variants={staggerChild}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-dark-900/80 text-slate-400 hover:text-white hover:bg-dark-850 border border-slate-800'
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const IconComponent = iconMap[category.icon] || Cpu;
              
              return (
                <motion.div
                  key={category.id}
                  variants={staggerChild}
                  layout
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between"
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

                    {/* Skills Badges / Chips */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="group/badge px-3 py-1.5 rounded-lg bg-dark-950/80 hover:bg-blue-950/40 border border-slate-800/90 hover:border-blue-500/40 text-xs font-medium text-slate-300 hover:text-blue-300 transition-all flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 group-hover/badge:bg-blue-400 transition-colors"></span>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Note */}
                  <div className="mt-6 pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Verified Competency</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
