import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio360Data';
import { Github, Linkedin } from './SocialIcons';
import { ArrowUp } from 'lucide-react';

export const FooterEditorial = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-dark-950 text-slate-400 text-xs select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Sri */}
        <div className="flex items-center gap-2 font-mono font-bold text-white tracking-widest text-sm">
          <span>{PERSONAL_INFO.brandName}</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400 text-xs font-normal">{PERSONAL_INFO.name}</span>
        </div>

        {/* Center: Built with curiosity + code */}
        <div className="font-mono text-slate-400 text-center">
          Built with curiosity + code
        </div>

        {/* Right: Copyright & Socials */}
        <div className="flex items-center gap-4">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors ml-2"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] font-mono">© 2026</span>
        </div>

      </div>
    </footer>
  );
};

