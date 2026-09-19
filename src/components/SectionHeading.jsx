import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, staggerChild, VIEWPORT } from '../hooks/useMotion';

export const SectionHeading = ({ badge, title, subtitle, centered = true }) => {
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}
    >
      {badge && (
        <motion.div
          variants={staggerChild}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 bg-blue-500/10 text-blue-400 border border-blue-500/20 ${centered ? 'mx-auto' : ''}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
          {badge}
        </motion.div>
      )}
      <motion.h2
        variants={staggerChild}
        className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={staggerChild}
          className="text-slate-400 text-sm sm:text-base leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
