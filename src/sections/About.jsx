import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ABOUT_TEXT, PERSONAL_INFO } from '../data/portfolioData';
import { 
  BrainCircuit, 
  Layers, 
  Cpu, 
  Database, 
  Terminal, 
  Workflow, 
  ArrowRight,
  Code
} from 'lucide-react';

export const About = () => {
  const capabilityIcons = [
    <BrainCircuit className="w-5 h-5 text-blue-400" />,
    <Layers className="w-5 h-5 text-indigo-400" />,
    <Workflow className="w-5 h-5 text-cyan-400" />
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
          <div className="lg:col-span-7 space-y-6">
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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-dark-950 border border-slate-800/80 text-slate-300">
                    <span className="text-blue-400 block font-semibold mb-0.5">01. Frontend</span>
                    React, JS, Tailwind
                  </div>
                  <div className="p-2.5 rounded-lg bg-dark-950 border border-slate-800/80 text-slate-300">
                    <span className="text-indigo-400 block font-semibold mb-0.5">02. Backend</span>
                    Python, Flask, APIs
                  </div>
                  <div className="p-2.5 rounded-lg bg-dark-950 border border-slate-800/80 text-slate-300">
                    <span className="text-cyan-400 block font-semibold mb-0.5">03. Databases</span>
                    SQL, MongoDB, Supabase
                  </div>
                  <div className="p-2.5 rounded-lg bg-dark-950 border border-slate-800/80 text-slate-300">
                    <span className="text-emerald-400 block font-semibold mb-0.5">04. AI / ML</span>
                    Machine Learning, NLP
                  </div>
                  <div className="p-2.5 rounded-lg bg-dark-950 border border-slate-800/80 text-slate-300">
                    <span className="text-amber-400 block font-semibold mb-0.5">05. Data</span>
                    Pandas, NumPy, Plots
                  </div>
                  <div className="p-2.5 rounded-lg bg-dark-950 border border-slate-800/80 text-slate-300">
                    <span className="text-violet-400 block font-semibold mb-0.5">06. Automation</span>
                    Git, Scripting, Excel
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Capabilities Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold px-1">
              What I Build & Deliver
            </h3>

            {ABOUT_TEXT.capabilities.map((cap, index) => (
              <div 
                key={cap.title}
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
              </div>
            ))}

            {/* Direct Connect Quick Box */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-950/40 via-dark-900 to-indigo-950/30 border border-blue-900/40 mt-4">
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
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

