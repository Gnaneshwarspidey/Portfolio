import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';
import { Github, Linkedin } from '../components/SocialIcons';
import { 
  ArrowRight, 
  Mail, 
  Terminal, 
  Sparkles, 
  BrainCircuit, 
  CheckCircle2 
} from 'lucide-react';
import { fadeUp, scaleIn, stagger, staggerChild, DURATION, EASE, VIEWPORT } from '../hooks/useMotion';

// Container – staggered reveal for the left column
const heroContainer = stagger(0.1, 0.15);

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Status Pill */}
            <motion.div variants={staggerChild} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900/80 border border-slate-700/80 text-xs font-medium text-slate-300 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={staggerChild} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
              Hi, I'm <span className="gradient-accent">{PERSONAL_INFO.name}</span>
            </motion.h1>

            {/* Role & Profession Tagline */}
            <motion.div variants={staggerChild} className="flex items-center justify-center lg:justify-start gap-2 text-slate-300 font-mono text-sm sm:text-base font-medium mb-5">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>{PERSONAL_INFO.roleSubtitle}</span>
            </motion.div>

            {/* Headline / Supporting Text */}
            <motion.p variants={staggerChild} className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal">
              {PERSONAL_INFO.headline}
            </motion.p>

            {/* Key Skill Highlights Pills */}
            <motion.div variants={staggerChild} className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
              {['AI & Machine Learning', 'Python Development', 'Full-Stack Web', 'Data & Automation'].map((pill) => (
                <span key={pill} className="text-xs px-2.5 py-1 rounded-md bg-dark-850 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-blue-400" />
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={staggerChild} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all active:scale-95 group"
                aria-label="View my projects"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-dark-900/90 hover:bg-dark-800 text-slate-200 hover:text-white text-sm font-semibold border border-slate-700/80 transition-all active:scale-95"
                aria-label="Contact me"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div variants={staggerChild} className="flex items-center justify-center lg:justify-start gap-5 pt-6 border-t border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Connect:
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors group"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                <span className="font-mono">GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors group"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                <span className="font-mono">LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Headshot Photo Card (5 cols) */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45, duration: DURATION.section, ease: EASE.out }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md group">
              
              {/* Subtle Glowing Backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-cyan-600/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Outer Card Container */}
              <div className="relative rounded-2xl bg-dark-900 border border-slate-700/80 p-3.5 shadow-2xl overflow-hidden">
                
                {/* Photo Header Bar (Terminal style) */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800/80 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    engineer_profile.ai
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                </div>

                {/* Headshot Image Container */}
                <div className="relative rounded-xl overflow-hidden bg-dark-950 aspect-[4/5]">
                  <img
                    src={profileImg}
                    alt="Keshgir Gnaneshwar - AI/ML Engineer & Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent"></div>

                  {/* Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-dark-900/90 backdrop-blur-md border border-slate-700/80">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-white">Keshgir Gnaneshwar</div>
                        <div className="text-[11px] text-blue-400 font-mono">B.E. AI & ML (Final Year)</div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <BrainCircuit className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Specs */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded-lg bg-dark-950/60 border border-slate-800 text-slate-300">
                    <span className="text-slate-400 block text-[10px]">FOCUS</span>
                    AI & Full-Stack
                  </div>
                  <div className="p-2 rounded-lg bg-dark-950/60 border border-slate-800 text-slate-300">
                    <span className="text-slate-400 block text-[10px]">CORE LANG</span>
                    Python & JS
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
