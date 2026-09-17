import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-dark-950 text-white relative border-b border-white/10 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-3">
          // NEXT STEPS
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6">
          Your next website could look like this. Let's make it happen.
        </h2>
        <a
          href="#contact"
          data-cursor="view"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-dark-950 font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95 shadow-2xl"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

