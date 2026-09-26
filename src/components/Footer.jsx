import React, { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../data/portfolioData";
import { Github, Linkedin } from "./SocialIcons";

import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  Terminal,
  Sparkles,
  Code2,
  Circle,
  CheckCircle2,
} from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: PERSONAL_INFO.github,
    icon: Github,
    description: "Projects & code",
    external: true,
  },
  {
    label: "LinkedIn",
    href: PERSONAL_INFO.linkedin,
    icon: Linkedin,
    description: "Professional profile",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${PERSONAL_INFO.email}`,
    icon: Mail,
    description: "Start a conversation",
    external: false,
  },
];

const Footer = () => {
  const [hoverTop, setHoverTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-dark-950 overflow-hidden">
      {/* Background Ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-96 h-64 bg-amber-500/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="mb-14 rounded-2xl border border-amber-500/20 bg-dark-900/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-widest font-mono font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Let's Build Something Meaningful
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Have an engineering role or project?
                <span className="block text-amber-400">
                  Let's connect and discuss.
                </span>
              </h2>

              <p className="mt-2 text-zinc-400 max-w-xl text-xs sm:text-sm">
                Open to internships, AI/ML engineering roles, and full-stack software development opportunities.
              </p>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 text-xs font-semibold shadow-md transition"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-3 border-b border-white/[0.06] pb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Terminal className="w-5 h-5" />
              </div>

              <div>
                <h3 className="font-bold text-white text-base">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  AI & ML Student
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs text-zinc-400 leading-relaxed">
              Building AI-powered applications, intelligent automation, modern web experiences, and practical software solutions.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-[11px] font-mono text-emerald-400 font-semibold">
              <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400" />
              Available for opportunities
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-4">
              <Code2 className="w-4 h-4 text-amber-400" />
              Connect
            </div>

            <div className="space-y-2.5">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-dark-900 transition border border-transparent hover:border-zinc-800"
                  >
                    <div className="w-8 h-8 rounded-lg bg-dark-900 border border-zinc-800 flex items-center justify-center text-amber-400">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <p className="text-xs text-white font-medium">
                        {item.label}
                      </p>
                      <p className="text-[11px] text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Portfolio Status */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-4">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              System Status
            </div>

            <div className="rounded-xl border border-zinc-800 bg-dark-900/90 p-4 space-y-2.5 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-zinc-500">System</span>
                <span className="text-emerald-400 font-semibold">ONLINE</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">Frontend</span>
                <span className="text-zinc-300">React + Tailwind</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">Focus</span>
                <span className="text-amber-300">AI / ML / Full-Stack</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">Location</span>
                <span className="text-zinc-300">Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-zinc-500">
              © 2026 {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="text-[11px] font-mono text-zinc-600 mt-0.5">
              Engineered with React + Tailwind CSS + Framer Motion
            </p>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onHoverStart={() => setHoverTop(true)}
            onHoverEnd={() => setHoverTop(false)}
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 text-xs font-semibold shadow-md transition-all"
          >
            Back to Top
            <motion.span animate={{ y: hoverTop ? -2 : 0 }}>
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
