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

      {/* LightLines background */}
      <LightLines
        className="absolute inset-0 z-0"
        gradientFrom="#020817"
        gradientTo="#0a1628"
        lineColor="#38bdf8"
        lightColor="#7dd3fc"
        linesOpacity={0.08}
        lightsOpacity={0.85}
        speedMultiplier={0.6}
      />

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-dark-950/20" />
      <div className="absolute left-[8%] top-[18%] z-[1] h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute right-[8%] top-[30%] z-[1] h-52 w-52 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      {/* Content — two column */}
      <div className="relative z-[3] mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 sm:px-8 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* LEFT — text */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div
              variants={fadeDown}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/30 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>
              <span>AI & ML Student</span>
              <Sparkles className="h-4 w-4 text-cyan-300" />
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUp}>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/80">
                Hello, I&apos;m
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {PERSONAL_INFO.name}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-xl font-semibold text-white/80 sm:text-2xl">
                <span>{PERSONAL_INFO.role || "AI & ML Student"}</span>
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                  Building Intelligent Experiences
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeIn}
              className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg"
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
                { icon: Code2,  label: "Development",  text: "Modern web apps" },
                { icon: Layers3,label: "Innovation",   text: "Interactive solutions" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={TRANSITION.spring}
                    className="group rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-2.5">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.label}</p>
                        <p className="text-xs text-white/45">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <motion.button
                type="button"
                onClick={scrollToProjects}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-dark-950 shadow-[0_0_30px_rgba(255,255,255,0.12)] transition"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                type="button"
                onClick={scrollToAbout}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/10"
              >
                Explore More
              </motion.button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={fadeIn}
              className="mt-14 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/35"
            >
              <span>Scroll to explore</span>
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                <ArrowDown className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT — profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-violet-500/20 blur-2xl" />

              {/* Rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[3px] rounded-full bg-gradient-to-r from-cyan-400/60 via-blue-500/40 to-violet-500/60"
                style={{ borderRadius: "50%" }}
              />

              {/* Static inner ring */}
              <div className="absolute -inset-[3px] rounded-full bg-dark-950" style={{ borderRadius: "50%" }} />

              {/* Photo */}
              <div className="relative h-80 w-80 overflow-hidden rounded-full border border-white/10 xl:h-96 xl:w-96">
                <img
                  src={profileImg}
                  alt={PERSONAL_INFO.name}
                  className="h-full w-full object-cover object-top"
                />
                {/* Subtle inner overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-dark-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-black/60 px-3 py-2 backdrop-blur-xl"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-mono font-semibold text-white">Available</span>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-6 bottom-10 flex items-center gap-2 rounded-2xl border border-blue-400/20 bg-black/60 px-3 py-2 backdrop-blur-xl"
              >
                <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                <span className="text-xs font-mono font-semibold text-white">AI & ML</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 z-[4] h-40 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />
    </section>
  );
}
