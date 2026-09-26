import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { CERTIFICATIONS } from '../data/portfolioData';
import { stagger, staggerChild, VIEWPORT } from '../hooks/useMotion';
import {
  Wifi,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowUpRight,
  BadgeCheck,
  ScanLine,
} from 'lucide-react';

import { FlipCard } from '../components/ui/flip-card';

const CertificationCard = ({ cert, index, IconComponent }) => {
  const FrontCard = (
    <div className="group relative h-full min-h-[300px]">
      {/* Animated Gradient Border */}
      <div className="absolute -inset-[1px] rounded-[1.05rem] bg-gradient-to-r from-blue-500/0 via-cyan-400/0 to-indigo-500/0 opacity-0 blur-[2px] transition-all duration-500 group-hover:from-blue-500/70 group-hover:via-cyan-400/60 group-hover:to-indigo-500/70 group-hover:opacity-100" />

      {/* Card */}
      <div className="relative h-full overflow-hidden rounded-2xl border border-slate-800/90 bg-dark-900/90 backdrop-blur-xl flex flex-col justify-between">
        
        {/* Cursor Spotlight Effect */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(280px_circle_at_center,rgba(59,130,246,0.14),transparent_70%)]" />

        {/* Top Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.5) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Scan Line */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-0 group-hover:opacity-100"
          animate={{ y: ['0%', '900%'] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10 p-6 sm:p-7 flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono tracking-widest text-blue-400/80">
                  CERT_{String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-px w-8 bg-slate-800" />
              </div>

              <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                  Verified
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/25 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/5">
                <IconComponent className="relative z-10 h-6 w-6" />
              </div>

              <div className="min-w-0">
                <span className="mb-1.5 inline-flex items-center rounded-md border border-slate-800 bg-dark-950 px-2 py-1 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  {cert.issuer}
                </span>

                <h3 className="text-base sm:text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-blue-300">
                  {cert.title}
                </h3>

                <p className="mt-1.5 text-xs text-slate-400">
                  {cert.category}
                </p>
              </div>
            </div>

            <div className="relative mt-7 overflow-hidden rounded-xl border border-slate-800/80 bg-dark-950/70 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/5">
                    <BadgeCheck className="h-4 w-4 text-blue-400" />
                  </div>

                  <div>
                    <p className="text-xs font-mono tracking-wider text-slate-500">Credential Status</p>
                    <p className="mt-0.5 text-xs font-semibold text-slate-200">
                      Authenticated Program
                    </p>
                  </div>
                </div>

                <ScanLine className="h-4 w-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
              </div>

              <div className="mt-4 h-px overflow-hidden bg-slate-800">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.12, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-800/70 pt-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Issued By
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-300">
                {cert.issuer}
              </p>
            </div>

            <span className="text-[11px] font-mono text-blue-400 flex items-center gap-1 group-hover:underline">
              Flip Card <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const BackCard = (
    <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-blue-500/30 bg-dark-950 p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl pointer-events-none" />

      <div>
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-blue-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Official Credential Details
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
            ID: {cert.id}
          </span>
        </div>

        <h4 className="text-base font-bold text-white mb-2">{cert.title}</h4>
        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          Specialized certification verified under {cert.issuer} professional standards in {cert.category}.
        </p>

        <div className="space-y-2 text-xs font-mono">
          <div className="flex items-center justify-between p-2 rounded bg-dark-900 border border-slate-800">
            <span className="text-slate-400">Issuer:</span>
            <span className="text-blue-300 font-semibold">{cert.issuer}</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-dark-900 border border-slate-800">
            <span className="text-slate-400">Verification:</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Confirmed
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-400">
          Tap / Hover to return
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );

  return (
    <motion.div variants={staggerChild} className="h-full min-h-[320px]">
      <FlipCard front={FrontCard} back={BackCard} />
    </motion.div>
  );
};

export const Certifications = () => {
  const iconMap = {
    Wifi,
    ShieldCheck,
    Smartphone,
    Sparkles,
  };

  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-y border-slate-800/60 bg-dark-900/40 py-24"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-10 right-[10%] h-80 w-80 rounded-full bg-indigo-600/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.7) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Verified Credentials"
          title="Certifications & Programs"
          subtitle="Accredited programs across IoT, Cybersecurity, Mobile Development, and Artificial Intelligence."
        />

        {/* Certification Grid */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2"
        >
          {CERTIFICATIONS.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || Award;

            return (
              <CertificationCard
                key={cert.id}
                cert={cert}
                index={index}
                IconComponent={IconComponent}
              />
            );
          })}
        </motion.div>

        {/* Credential Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-10 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-dark-950/50 px-5 py-4 backdrop-blur-xl">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/5">
                  <Award className="h-4 w-4 text-blue-400" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Continuous Learning
                  </p>
                  <p className="text-xs text-slate-500">Building knowledge across emerging technologies</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {CERTIFICATIONS.length} Credentials Listed
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
