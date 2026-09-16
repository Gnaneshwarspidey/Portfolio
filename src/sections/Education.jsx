import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, BookOpen, CheckCircle2, Award } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Foundation"
          title="Education"
          subtitle="Specialized undergraduate curriculum in Artificial Intelligence and Machine Learning."
        />

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 relative overflow-hidden">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 mb-1.5">
                    {EDUCATION.status}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {EDUCATION.degree}
                  </h3>
                  <div className="text-sm font-medium text-blue-400 mt-0.5">
                    Specialization: {EDUCATION.specialization}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-dark-950 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>Engineering Degree</span>
              </div>
            </div>

            {/* Core Coursework & Focus Areas */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
                Key Academic & Applied Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EDUCATION.focusAreas.map((area, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-dark-950/60 border border-slate-800/80 flex items-center gap-3 text-xs sm:text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

