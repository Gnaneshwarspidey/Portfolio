import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Linkedin, Github } from '../components/SocialIcons';
import { fadeUp, stagger, staggerChild, VIEWPORT } from '../hooks/useMotion';
import {
  Mail,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  Terminal,
  Radio,
  ExternalLink,
} from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (error) {
      console.error('Unable to copy:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoSubject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );

    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] bg-dark-950 py-24"
    >
      {/* Background Ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-20 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something Meaningful"
          description="Interested in AI, software development, data, or automation? I'm open to opportunities, collaborations, and engineering conversations."
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* LEFT — CONTACT INFO */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="space-y-4 lg:col-span-5"
          >
            
            {/* Availability panel */}
            <motion.div
              variants={staggerChild}
              className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-dark-900/90 p-5 backdrop-blur-xl shadow-xl"
            >
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <div className="mb-1.5 flex items-center gap-2">
                    <Radio className="h-4 w-4 text-amber-400" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-400">
                      Connection Status
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    Open to Opportunities
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                    Software engineering, full-stack, AI/ML and technology-focused roles.
                  </p>
                </div>

                <div className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
              </div>
            </motion.div>

            {/* Email Direct */}
            <motion.div variants={staggerChild}>
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-900/90 p-5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-zinc-700">
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="mb-0.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                        Email Directly
                      </div>

                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="block truncate text-xs sm:text-sm font-semibold text-white transition-colors hover:text-amber-300"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email)}
                    className="ml-2 shrink-0 inline-flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-dark-950 px-3 py-2 text-xs font-semibold text-zinc-300 transition-all hover:border-amber-500/30 hover:text-white"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <><Check className="h-3.5 w-3.5 text-emerald-400" /><span className="text-emerald-400">Copied</span></>
                    ) : (
                      <><Copy className="h-3.5 w-3.5" /><span>Copy</span></>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Social cards */}
            <motion.div
              variants={staggerChild}
              className="grid grid-cols-2 gap-4"
            >
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group/social relative overflow-hidden rounded-xl border border-white/[0.08] bg-dark-900/90 p-4 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/30 shadow-md"
                aria-label="LinkedIn profile"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                    <Linkedin className="h-4 w-4" />
                  </div>

                  <div>
                    <div className="text-xs font-bold text-white">
                      LinkedIn
                    </div>

                    <div className="mt-0.5 flex items-center gap-0.5 font-mono text-xs text-zinc-500 transition-colors group-hover/social:text-amber-400">
                      Connect
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="group/social relative overflow-hidden rounded-xl border border-white/[0.08] bg-dark-900/90 p-4 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/30 shadow-md"
                aria-label="GitHub profile"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                    <Github className="h-4 w-4" />
                  </div>

                  <div>
                    <div className="text-xs font-bold text-white">
                      GitHub
                    </div>

                    <div className="mt-0.5 flex items-center gap-0.5 font-mono text-xs text-zinc-500 transition-colors group-hover/social:text-amber-400">
                      Profile
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Response notice */}
            <motion.div
              variants={staggerChild}
              className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-dark-900/90 p-4 backdrop-blur-xl"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <p className="font-mono text-xs leading-relaxed text-zinc-400">
                  Available for full-time roles, internships, and project collaborations. Usually responds within 24 hours.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="lg:col-span-7"
          >
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-zinc-700">
              <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                
                {/* Form header */}
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-1.5 flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-amber-400" />
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-400">
                        Communication Terminal
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      Send a Message
                    </h3>

                    <p className="mt-0.5 text-xs text-zinc-400">
                      Start a direct inquiry or conversation.
                    </p>
                  </div>

                  <div className="hidden rounded-lg border border-zinc-800 bg-dark-950 p-2 sm:block">
                    <MessageSquare className="h-4 w-4 text-zinc-500" />
                  </div>
                </div>

                {/* Input grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold"
                    >
                      Your Name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      placeholder="e.g. Alex Smith"
                      className="w-full rounded-xl border border-zinc-800 bg-dark-950 px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold"
                    >
                      Your Email *
                    </label>

                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      placeholder="alex@example.com"
                      className="w-full rounded-xl border border-zinc-800 bg-dark-950 px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subject: e.target.value,
                      })
                    }
                    placeholder="Opportunity / Collaboration"
                    className="w-full rounded-xl border border-zinc-800 bg-dark-950 px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold"
                    >
                      Message *
                    </label>
                  </div>

                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Hi Gnaneshwar, I'd like to discuss..."
                    className="w-full resize-none rounded-xl border border-zinc-800 bg-dark-950 px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/send mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-6 py-3 text-xs font-semibold text-dark-950 shadow-md transition-all"
                >
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover/send:translate-x-1" />
                  <span>Send Message</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
