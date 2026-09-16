import React from 'react';

export const SectionHeading = ({ badge, title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 bg-blue-500/10 text-blue-400 border border-blue-500/20 ${centered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

