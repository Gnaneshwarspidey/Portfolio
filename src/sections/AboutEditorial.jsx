import React from 'react';
import { PERSONAL_INFO, EXPERIENCE_LEAP } from '../data/portfolio360Data';
import { Terminal, BrainCircuit, Code2, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const AboutEditorial = () => {
  return (
    <section id="about" className="py-28 bg-dark-950 text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
              // 01. ABOUT ME
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              More Than A Developer.
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            I build digital experiences that combine engineering precision, product design, and real-time interaction.
          </div>
        </div>

        {/* Dynamic Editable Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-dark-900/60 border border-white/10 flex flex-col justify-between hover:border-blue-500/40 transition-all group"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6">
                {stat.label}
              </span>
              <div className="text-4xl sm:text-5xl font-black text-white group-hover:text-blue-400 transition-colors font-sans">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative & Internship Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              Specializing in <span className="text-white font-semibold">Artificial Intelligence & Machine Learning</span> as a final-year engineering student, my work focuses on building full-stack applications, intelligent AI integrations, and responsive web products.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              From designing intuitive interfaces with React & Tailwind CSS to developing APIs with Python and Flask, managing databases (SQL, MongoDB, Supabase, Redis), and integrating Gemini AI models, I create products that perform seamlessly under real-world conditions.
            </p>

            <div className="pt-6 flex flex-wrap gap-2">
              {['Full-Stack Development', 'AI-Powered Products', 'Interactive Experiences', 'UI/UX Design', 'Automation'].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Highlight: Leap Inspire ML Intern */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-dark-900/80 border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                Practical Experience
              </span>
              <span className="text-xs font-mono text-slate-400">
                {EXPERIENCE_LEAP.period}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              {EXPERIENCE_LEAP.role}
            </h3>
            <div className="text-sm font-semibold text-slate-300 mb-4">
              {EXPERIENCE_LEAP.company}
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              {EXPERIENCE_LEAP.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
              {EXPERIENCE_LEAP.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-md bg-dark-950 border border-white/10 text-[11px] font-mono text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

