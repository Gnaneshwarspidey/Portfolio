import React from 'react';
import { SKILLS_DATA } from '../data/portfolio360Data';

export const SkillsEditorial = () => {
  const categories = [
    { title: "Frontend Architecture", skills: SKILLS_DATA.frontend },
    { title: "Backend & Systems", skills: SKILLS_DATA.backend },
    { title: "Databases & Storage", skills: SKILLS_DATA.database },
    { title: "Artificial Intelligence & ML", skills: SKILLS_DATA.ai_ml },
    { title: "Motion & Creative 3D", skills: SKILLS_DATA.animation },
    { title: "Tools & DevOps", skills: SKILLS_DATA.tools },
  ];

  return (
    <section id="skills" className="py-28 bg-dark-950 text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
              // 03. TECHNICAL SKILLS
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              Interactive Typography.
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Real skills demonstrated through code, APIs, algorithmic workflows, and modern web architectures.
          </div>
        </div>

        {/* Categorized Skills Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-dark-900/40 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-3">
                  0{idx + 1}
                </span>
                <h3 className="text-xl font-bold text-white mb-6">
                  {cat.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
                Verified Technical Capability
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

