import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles, Code2, Cpu, Layers3 } from "lucide-react";
import { LightLines } from "../components/ui/light-lines";
import { PERSONAL_INFO } from "../data/portfolioData";
import { fadeUp, fadeDown, fadeIn, stagger, scaleIn, VIEWPORT, TRANSITION } from "../hooks/useMotion";
import profileImg from "../assets/profile-hero.png";

export function Hero() {
  const scrollToProjects = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-dark-950">

      {/* LightLines background with warm subtle tone */}
      <LightLines
        className="absolute inset-0 z-0"
        gradientFrom="#09090b"
        gradientTo="#121215"
        lineColor="#f59e0b"
        lightColor="#fbbf24"
        linesOpacity={0.04}
        lightsOpacity={0.6}
        speedMultiplier={0.5}
      />

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-dark-950/30" />
      <div className="absolute left-[8%] top-[18%] z-[1] h-48 w-48 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute right-[8%] top-[30%] z-[1] h-60 w-60 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      {/* Content — two column */}
      <div className="relative z-[3] mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-28 sm:px-8 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">

          {/* LEFT — text */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div
              variants={fadeDown}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>AI & ML Engineer</span>
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUp}>
              <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-amber-400/90 font-semibold">
                Hello, I&apos;m
              </p>

              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {PERSONAL_INFO.name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-lg font-semibold text-zinc-300 sm:text-xl">
                <span>{PERSONAL_INFO.role || "AI & ML Student"}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent font-bold">
                  Building Intelligent Systems
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeIn}
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
            >
              {PERSONAL_INFO.tagline ||
                "I build intelligent, interactive and user-focused digital experiences using AI, machine learning and modern web technologies."}
            </motion.p>

            {/* Capability cards */}
            <motion.div
              variants={scaleIn}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {[
                { icon: Cpu,    label: "AI / ML",      text: "Intelligent systems" },
                { icon: Code2,  label: "Development",  text: "Full-stack web apps" },
                { icon: Layers3,label: "Automation",   text: "Data & Workflows" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -3 }}
                    transition={TRANSITION.spring}
                    className="group rounded-xl border border-white/10 bg-dark-900/60 p-4 backdrop-blur-xl transition-colors hover:border-amber-500/25 hover:bg-dark-850"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg border border-amber-500/20 bg-amber-500/10 p-2 shrink-0">
                        <Icon className="h-4 w-4 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{item.label}</p>
                        <p className="text-[11px] text-zinc-400">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <motion.button
                type="button"
                onClick={scrollToProjects}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-6 py-3.5 text-sm font-semibold text-dark-950 shadow-md transition-all"
              >
                View My Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                type="button"
                onClick={scrollToAbout}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all"
              >
                Explore More
              </motion.button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={fadeIn}
              className="mt-12 flex items-center gap-3 text-xs tracking-[0.2em] text-zinc-500 font-mono uppercase"
            >
              <span>Scroll down</span>
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                <ArrowDown className="h-3.5 w-3.5 text-amber-400" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT — profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex items-center justify-center order-first lg:order-last"
          >
            <div className="relative">
              {/* Outer subtle glow ring */}
              <div className="absolute -inset-3 rounded-full bg-amber-500/10 blur-xl pointer-events-none" />

              {/* Photo Container */}
              <div className="relative h-56 w-56 overflow-hidden rounded-full border border-white/15 bg-dark-900 shadow-2xl sm:h-64 sm:w-64 xl:h-88 xl:w-88">
                <img
                  src={profileImg}
                  alt={PERSONAL_INFO.name}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-dark-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-3 top-6 flex items-center gap-2 rounded-xl border border-white/10 bg-dark-900/90 px-3 py-1.5 backdrop-blur-xl shadow-lg"
              >
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-mono font-semibold text-zinc-200">Available for Roles</span>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-4 bottom-8 flex items-center gap-2 rounded-xl border border-amber-500/20 bg-dark-900/90 px-3 py-1.5 backdrop-blur-xl shadow-lg"
              >
                <Cpu className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-xs font-mono font-semibold text-zinc-200">AI & Full-Stack</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 z-[4] h-32 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />
    </section>
  );
}
