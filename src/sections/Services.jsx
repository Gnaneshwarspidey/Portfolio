import React from 'react';
import { SERVICES, WHY_WORK_WITH_ME } from '../data/portfolio360Data';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const Services = () => {
  return (
    <section id="services" className="py-28 bg-dark-950 text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
              // 04. CLIENT SERVICES
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              Let's Build Something Worth Remembering.
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            High-caliber digital development and engineering services tailored for visionary products and founders.
          </div>
        </div>

        {/* Services List / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-dark-900/60 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-mono text-blue-400 block mb-3">
                  SERVICE // 0{idx + 1}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  {srv.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>{srv.technologies}</span>
                <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Why Work With Me Grid */}
        <div>
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2">
              // METHODOLOGY
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Why Work With Me
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_WORK_WITH_ME.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{item.title}</span>
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

