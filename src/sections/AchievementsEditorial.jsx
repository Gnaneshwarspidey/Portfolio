import React from 'react';
import { ACHIEVEMENTS, SOCIAL_COMMUNITY } from '../data/portfolio360Data';
import { Award, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const AchievementsEditorial = () => {
  return (
    <section id="achievements" className="py-28 bg-dark-950 text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
              // 05. HONORS & COMMUNITY
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              Achievements & Impact.
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Recognitions across hackathons, technical problem-solving, fellowships, and tech communities.
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-dark-900/60 border border-white/10 flex items-center gap-3.5 hover:border-blue-500/30 transition-colors"
            >
              <Award className="w-5 h-5 text-blue-400 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">{item}</span>
            </div>
          ))}
        </div>

        {/* Social / Community Box: Sri Tech */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950/40 via-dark-900 to-indigo-950/40 border border-white/15">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>{SOCIAL_COMMUNITY.brand}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
              {SOCIAL_COMMUNITY.heading}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {SOCIAL_COMMUNITY.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

