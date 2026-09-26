import React from 'react';
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
} from 'lucide-react';

import { FlipCard } from '../components/ui/flip-card';

const CertificationCard = ({ cert, index, IconComponent }) => {
  const FrontCard = (
    <div className="group relative h-full min-h-[300px]">
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-900/90 p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between shadow-xl transition-all duration-300 group-hover:border-zinc-700">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest text-amber-400/90 font-semibold">
                CERT_{String(index + 1).padStart(2, '0')}
              </span>
              <div className="h-px w-6 bg-zinc-800" />
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                Verified
              </span>
            </div>
          </div>

          {/* Title & Icon */}
          <div className="flex items-start gap-4">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
              <IconComponent className="h-6 w-6" />
            </div>

            <div className="min-w-0">
              <span className="mb-1.5 inline-flex items-center rounded-md border border-zinc-800 bg-dark-950 px-2 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                {cert.issuer}
              </span>

              <h3 className="text-base sm:text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-amber-300">
                {cert.title}
              </h3>

              <p className="mt-1 text-xs text-zinc-400">
                {cert.category}
              </p>
            </div>
          </div>

          {/* Status info */}
          <div className="relative mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-dark-950 p-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <BadgeCheck className="h-4 w-4 text-amber-400 shrink-0" />
                <div>
                  <p className="text-[11px] font-mono text-zinc-500">Status</p>
                  <p className="text-xs font-semibold text-zinc-200">
                    Authenticated Certification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-white/[0.06] pt-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
              Issued By
            </p>
            <p className="mt-0.5 text-xs font-semibold text-zinc-300">
              {cert.issuer}
            </p>
          </div>

          <span className="text-[11px] font-mono text-amber-400 flex items-center gap-1 group-hover:underline">
            Hover to Flip <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </div>
  );

  const BackCard = (
    <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-amber-500/30 bg-dark-950 p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
      <div>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-amber-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Official Credential Details
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
            ID: {cert.id}
          </span>
        </div>

        <h4 className="text-base font-bold text-white mb-2">{cert.title}</h4>
        <p className="text-xs text-zinc-400 leading-relaxed mb-4">
          Specialized certification verified under {cert.issuer} professional standards in {cert.category}.
        </p>

        <div className="space-y-2 text-xs font-mono">
          <div className="flex items-center justify-between p-2 rounded bg-dark-900 border border-zinc-800">
            <span className="text-zinc-500">Issuer:</span>
            <span className="text-amber-300 font-semibold">{cert.issuer}</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-dark-900 border border-zinc-800">
            <span className="text-zinc-500">Verification:</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Confirmed
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
        <span className="text-[11px] font-mono text-zinc-500">
          Tap / Hover to return
        </span>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500 text-dark-950 font-bold shadow-md">
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
      className="relative overflow-hidden border-y border-white/[0.06] bg-dark-950 py-24"
    >
      {/* Background Ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-20 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Verified Credentials"
          title="Certifications & Programs"
          description="Accredited programs across IoT, Cybersecurity, Mobile Development, and Artificial Intelligence."
        />

        {/* Certification Grid */}
        <motion.div
          variants={stagger(0.1)}
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-10 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-dark-900/90 px-5 py-4 backdrop-blur-xl shadow-lg">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10">
                  <Award className="h-4 w-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Continuous Learning
                  </p>
                  <p className="text-xs text-zinc-400">Building knowledge across emerging technologies</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {CERTIFICATIONS.length} Credentials Verified
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
