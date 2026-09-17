import React from 'react';
import { MARQUEE_ITEMS } from '../data/portfolio360Data';

export const Marquee = () => {
  return (
    <div className="py-8 bg-dark-950 border-y border-white/10 overflow-hidden select-none relative">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] whitespace-nowrap">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="text-xl sm:text-2xl font-extrabold tracking-widest text-slate-400/80 hover:text-white transition-colors uppercase font-sans">
              {item}
            </span>
            <span className="mx-6 text-blue-500 font-mono text-sm">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

