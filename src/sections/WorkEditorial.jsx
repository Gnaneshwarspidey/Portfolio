import React, { useState } from 'react';
import { EDITORIAL_WORK } from '../data/portfolio360Data';
import { ProjectVisual } from '../components/ProjectVisual';
import { Github } from '../components/SocialIcons';
import { ArrowUpRight, CheckCircle2, ChevronRight, X } from 'lucide-react';

export const WorkEditorial = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-28 bg-dark-950 text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
              // 02. SELECTED WORK
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              Featured Projects.
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Large editorial presentations of AI-driven systems, full-stack architectures, and digital platforms.
          </div>
        </div>

        {/* Editorial Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {EDITORIAL_WORK.map((proj) => (
            <div
              key={proj.id}
              className="group flex flex-col justify-between rounded-3xl bg-dark-900/50 border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300"
            >
              <div>
                {/* Project Large Visual Area */}
                <div
                  className="h-64 sm:h-72 w-full overflow-hidden relative cursor-pointer"
                  data-cursor="view"
                  onClick={() => setSelectedProject(proj)}
                >
                  <ProjectVisual theme={proj.theme} title={proj.title} />
                  <div className="absolute inset-0 bg-dark-950/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                      {proj.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Card Footer */}
              <div className="px-8 pb-8 pt-0 flex items-center justify-between border-t border-white/5 mt-auto">
                <button
                  onClick={() => setSelectedProject(proj)}
                  data-cursor="view"
                  className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-white hover:text-blue-400 transition-colors py-2"
                >
                  <span>Explore Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/20 text-slate-300 hover:text-white transition-colors border border-white/10"
                  aria-label="View Source Code on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-2xl bg-dark-900 border border-white/20 rounded-3xl p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
              {selectedProject.category}
            </span>
            <h3 className="text-3xl font-black text-white mt-1 mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              {selectedProject.tagline}
            </p>

            <div className="h-48 rounded-2xl overflow-hidden mb-6 border border-white/10">
              <ProjectVisual theme={selectedProject.theme} title={selectedProject.title} />
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                Overview & Engineering Architecture
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-blue-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-end gap-3">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-dark-950 text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-slate-200 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

