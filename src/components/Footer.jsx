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
    <footer className="relative border-t border-slate-800 bg-dark-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-72 bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* CTA */}
        <div className="mb-14 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-dark-900 to-indigo-500/10 p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-blue-400 text-xs uppercase tracking-widest font-mono mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Let's Build Something Meaningful
              </div>

              <h2 className="text-3xl font-bold text-white">
                Have an idea?
                <span className="block gradient-accent">
                  Let's turn it into reality.
                </span>
              </h2>

              <p className="mt-3 text-slate-400 max-w-xl text-sm">
                I'm open to internships, collaborations, AI/ML projects and
                software engineering opportunities.
              </p>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-3 border-b border-slate-800 pb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Terminal className="w-5 h-5" />
              </div>

              <div>
                <h3 className="font-bold text-white text-lg">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  {PERSONAL_INFO.roleSubtitle}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-500 leading-6">
              Building AI-powered applications, intelligent automation, modern
              web experiences, and practical software solutions.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-[11px] font-mono text-emerald-400">
              <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400" />
              Available for opportunities
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-4">
              <Code2 className="w-4 h-4 text-blue-400" />
              Connect
            </div>

            <div className="space-y-3">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-dark-900 transition border border-transparent hover:border-slate-800"
                  >
                    <div className="w-9 h-9 rounded-lg bg-dark-900 border border-slate-800 flex items-center justify-center text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <p className="text-sm text-white font-medium">
                        {item.label}
                      </p>
                      <p className="text-xs text-slate-500">
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
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-4">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Portfolio Status
            </div>

            <div className="rounded-2xl border border-slate-800 bg-dark-900/50 p-5 space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">System</span>
                <span className="text-emerald-400 text-xs font-mono">
                  ONLINE
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">Frontend</span>
                <span className="text-slate-300 text-xs font-mono">
                  React + Tailwind
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">Focus</span>
                <span className="text-blue-300 text-xs font-mono">AI / ML</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">Location</span>
                <span className="text-slate-300 text-xs font-mono">
                  Hyderabad, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500">
              © 2026 {PERSONAL_INFO.name}. All rights reserved.
            </p>

            <p className="text-[11px] font-mono text-slate-600 mt-1">
              Designed & Built with React + Tailwind CSS + Framer Motion
            </p>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onHoverStart={() => setHoverTop(true)}
            onHoverEnd={() => setHoverTop(false)}
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300"
          >
            Back to Top

            <motion.span animate={{ y: hoverTop ? -2 : 0 }}>
              <ArrowUp className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
