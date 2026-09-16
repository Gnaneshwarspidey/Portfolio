import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { EXPERIENCE } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Career Journey"
          title="Practical Work Experience"
          subtitle="Applied machine learning development and problem-solving in real-world environments."
        />

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Container */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 relative overflow-hidden">
                
                {/* Top Role & Company Line */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono text-blue-400 bg-blue-950/60 border border-blue-800/50 mb-1.5">
                        {exp.type}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-0.5">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-dark-950 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary Statement */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Detailed Responsibilities List */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Key Workflows & Contributions
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Environment:</span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-dark-950 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

