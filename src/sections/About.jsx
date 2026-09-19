import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ABOUT_TEXT, PERSONAL_INFO } from '../data/portfolioData';
import { fadeUp, scaleIn, stagger, staggerChild, VIEWPORT } from '../hooks/useMotion';
import { 
  BrainCircuit, 
  Layers, 
  Workflow, 
  Terminal, 
  ArrowRight
} from 'lucide-react';

export const About = () => {
  const capabilityIcons = [
    <BrainCircuit className="w-5 h-5 text-blue-400" />,
    <Layers className="w-5 h-5 text-indigo-400" />,
    <Workflow className="w-5 h-5 text-cyan-400" />
  ];

  const stackItems = [
    { label: '01. Frontend', color: 'text-blue-400',   desc: 'React, JS, Tailwind' },
    { label: '02. Backend',  color: 'text-indigo-400', desc: 'Python, Flask, APIs' },
    { label: '03. Databases',color: 'text-cyan-400',   desc: 'SQL, MongoDB, Supabase' },
    { label: '04. AI / ML',  color: 'text-emerald-400',desc: 'Machine Learning, NLP' },
    { label: '05. Data',     color: 'text-amber-400',  desc: 'Pandas, NumPy, Plots' },
    { label: '06. Automation',color:'text-violet-400', desc: 'Git, Scripting, Excel' },
  ];

  return (
    <section id="about" className="py-24 relative bg-dark-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Me"
          title="Engineering Practical Solutions Across AI & Software"
          subtitle="A comprehensive look at my engineering approach, technical breadth, and focus areas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio Column (7 cols) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-blue-400" />
                <span>Background & Engineering Philosophy</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                {ABOUT_TEXT.intro}
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {ABOUT_TEXT.summary}
              </p>

              {/* Code-style Technical Stack Breakdown */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  // Core Competency Layers
                </div>
                <motion.div
                  variants={stagger(0.07)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono"
                >
                  {stackItems.map((item) => (
                    <motion.div
                      key={item.label}
                      variants={staggerChild}
                      className="p-2.5 rounded-lg bg-dark-950 border border-slate-800/80 text-slate-300"
                    >
                      <span className={`${item.color} block font-semibold mb-0.5`}>{item.label}</span>
                      {item.desc}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Practical Capabilities Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold px-1">
              What I Build & Deliver
            </h3>

            <motion.div
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="space-y-4"
            >
              {ABOUT_TEXT.capabilities.map((cap, index) => (
                <motion.div 
                  key={cap.title}
                  variants={staggerChild}
                  className="glass-card glass-card-hover p-5 rounded-xl flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-dark-950 border border-slate-800 shrink-0 mt-0.5">
                    {capabilityIcons[index]}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Direct Connect Quick Box */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="p-5 rounded-xl bg-gradient-to-br from-blue-950/40 via-dark-900 to-indigo-950/30 border border-blue-900/40 mt-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-blue-300 uppercase tracking-wide">Status</div>
                  <div className="text-sm font-bold text-white">Open to Opportunities</div>
                </div>
                <a 
                  href="#contact"
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  Get in touch
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
