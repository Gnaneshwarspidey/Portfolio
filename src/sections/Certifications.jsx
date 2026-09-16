import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { CERTIFICATIONS } from '../data/portfolioData';
import { 
  Wifi, 
  ShieldCheck, 
  Smartphone, 
  Sparkles, 
  Award, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export const Certifications = () => {
  const iconMap = {
    Wifi: Wifi,
    ShieldCheck: ShieldCheck,
    Smartphone: Smartphone,
    Sparkles: Sparkles,
  };

  return (
    <section id="certifications" className="py-24 relative bg-dark-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Verified Credentials"
          title="Certifications & Programs"
          subtitle="Accredited programs across IoT, Cybersecurity, Mobile Development, and Artificial Intelligence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert) => {
            const IconComponent = iconMap[cert.icon] || Award;

            return (
              <div
                key={cert.id}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between border border-slate-800/90 group"
              >
                <div>
                  {/* Top Bar with Issuer and Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase px-2.5 py-1 rounded-md bg-dark-950 border border-slate-800">
                      {cert.issuer}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {cert.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer info */}
                <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Authorized Certificate</span>
                  <span className="text-slate-300 font-semibold">{cert.issuer}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

