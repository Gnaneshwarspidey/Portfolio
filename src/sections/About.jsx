import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ABOUT_TEXT, PERSONAL_INFO } from '../data/portfolioData';
import { fadeUp, stagger, staggerChild, VIEWPORT } from '../hooks/useMotion';

import {
  BrainCircuit,
  Layers,
  Workflow,
  Terminal,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code2,
  Database,
  Cpu,
  Activity,
  UserRound,
  Zap,
} from 'lucide-react';


/* ---------------------------------------
   About Section
---------------------------------------- */

export const About = () => {

  const capabilityIcons = [
    <BrainCircuit key="brain" className="h-5 w-5 text-amber-400" />,
    <Layers key="layers" className="h-5 w-5 text-emerald-400" />,
    <Workflow key="workflow" className="h-5 w-5 text-violet-400" />,
  ];

  const stackItems = [
    {
      label: '01. Frontend',
      color: 'text-amber-400',
      desc: 'React, JS, Tailwind',
      icon: Code2,
    },
    {
      label: '02. Backend',
      color: 'text-amber-300',
      desc: 'Python, Flask, APIs',
      icon: Terminal,
    },
    {
      label: '03. Databases',
      color: 'text-emerald-400',
      desc: 'SQL, MongoDB, Supabase',
      icon: Database,
    },
    {
      label: '04. AI / ML',
      color: 'text-amber-400',
      desc: 'Machine Learning, NLP',
      icon: BrainCircuit,
    },
    {
      label: '05. Data',
      color: 'text-amber-300',
      desc: 'Pandas, NumPy, Plots',
      icon: Activity,
    },
    {
      label: '06. Automation',
      color: 'text-violet-400',
      desc: 'Git, Scripting, Excel',
      icon: Zap,
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        border-y
        border-white/[0.06]
        bg-dark-950
        py-24
      "
    >

      {/* Background Ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
      </div>


      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="About Me"
          title="Engineering Practical Solutions Across AI & Software"
          description="A look into my engineering mindset, technical breadth, and the systems I enjoy building."
        />

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="lg:col-span-7"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1">
              
              {/* Terminal Header */}
              <div className="mb-6 flex items-center justify-between border-b border-white/[0.06] pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
                    <Terminal className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.18em] text-amber-400/90 font-semibold">
                      Developer Profile
                    </div>
                    <div className="mt-0.5 text-xs text-zinc-500">
                      Engineering Mindset
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
                    Available
                  </span>
                </div>
              </div>

              {/* Bio intro */}
              <div className="relative mb-5">
                <div className="absolute -left-1 top-0 h-full w-0.5 bg-gradient-to-b from-amber-400 via-amber-500/30 to-transparent" />
                <p className="pl-5 text-sm leading-relaxed text-zinc-200 sm:text-base">
                  {ABOUT_TEXT.intro}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                {ABOUT_TEXT.summary}
              </p>

              {/* Separator */}
              <div className="my-6 h-px bg-white/[0.06]" />

              {/* Stack heading */}
              <div className="mb-4 flex items-center justify-between">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                  Core Competency Stack
                </div>
                <Cpu className="h-4 w-4 text-amber-400/60" />
              </div>

              {/* Stack Grid */}
              <motion.div
                variants={stagger(0.06)}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className="grid grid-cols-2 gap-2.5 sm:grid-cols-3"
              >
                {stackItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      variants={staggerChild}
                      whileHover={{ y: -2 }}
                      className="group/stack relative overflow-hidden rounded-xl border border-white/[0.06] bg-dark-950/60 p-3 transition-all duration-300 hover:border-amber-500/30 hover:bg-dark-850"
                    >
                      <div className="relative z-10">
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className={`font-mono text-xs font-semibold ${item.color}`}>
                            {item.label}
                          </span>
                          <Icon className="h-3.5 w-3.5 text-zinc-500 transition-colors duration-300 group-hover/stack:text-amber-400" />
                        </div>
                        <span className="text-xs leading-relaxed text-zinc-400">
                          {item.desc}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Bottom profile indicator */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <UserRound className="h-3.5 w-3.5 text-zinc-500" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                    {PERSONAL_INFO?.role || 'AI & ML Student'}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-amber-400/80 font-semibold">
                  PROFILE_VERIFIED
                </span>
              </div>

            </div>
          </motion.div>


          {/* Capabilities */}
          <div className="lg:col-span-5 space-y-3">
            <div className="mb-4 flex items-center justify-between px-1">
              <span className="font-mono text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                What I Build & Deliver
              </span>
              <Sparkles className="h-4 w-4 text-amber-400/70" />
            </div>

            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="space-y-3"
            >
              {ABOUT_TEXT.capabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  variants={staggerChild}
                  whileHover={{ y: -3 }}
                  className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-dark-900/90 p-5 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700 shadow-md"
                >
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-dark-950 text-amber-400 transition-colors group-hover:border-amber-500/30">
                      {capabilityIcons[index]}
                    </div>

                    <div className="flex-1">
                      <div className="mb-1 flex items-center justify-between gap-3">
                        <h3 className="text-sm font-bold text-white transition-colors duration-300 group-hover:text-amber-300">
                          {cap.title}
                        </h3>
                        <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400" />
                      </div>
                      <p className="text-xs leading-relaxed text-zinc-400">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>


            {/* Contact CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              whileHover={{ y: -3 }}
              className="group relative overflow-hidden rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.06] via-dark-900 to-dark-900 p-5 shadow-lg transition-all"
            >
              <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                <div>
                  <div className="mb-1 flex items-center justify-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                      Open Status
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    Open to Opportunities
                  </div>
                  <p className="mt-0.5 text-xs text-zinc-400">
                    Let's discuss full-stack & AI/ML roles.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-5 py-2.5 text-xs font-semibold text-dark-950 shadow-md transition-all active:scale-[0.98]"
                >
                  Get in touch
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};
