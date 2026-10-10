import React, { useRef, useState } from 'react';
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

const InteractiveContactCard = ({
  children,
  className = '',
  accent = 'blue',
}) => {
  const cardRef = useRef(null);

  const [transform, setTransform] = useState(
    'perspective(1200px) rotateX(0deg) rotateY(0deg)'
  );

  const [spotlight, setSpotlight] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (event) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 6;
    const rotateX = ((y / rect.height) - 0.5) * -6;

    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );

    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransform(
      'perspective(1200px) rotateX(0deg) rotateY(0deg)'
    );

    setSpotlight({
      x: 50,
      y: 50,
    });
  };

  const glow =
    accent === 'emerald'
      ? 'rgba(16,185,129,0.13)'
      : 'rgba(59,130,246,0.14)';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 180ms ease-out',
      }}
      className={`group relative ${className}`}
    >
      {/* Animated border glow */}
      <div className="absolute -inset-[1px] rounded-[1.05rem] bg-gradient-to-r from-blue-500/0 via-cyan-400/0 to-indigo-500/0 opacity-0 blur-[2px] transition-all duration-500 group-hover:from-blue-500/60 group-hover:via-cyan-400/50 group-hover:to-indigo-500/60 group-hover:opacity-100" />

      <div className="relative h-full overflow-hidden rounded-2xl border border-slate-800/90 bg-dark-900/80 backdrop-blur-xl">
        
        {/* Cursor spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(
              260px circle at ${spotlight.x}% ${spotlight.y}%,
              ${glow},
              transparent 70%
            )`,
          }}
        />

        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Moving scan line */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            y: ['0%', '1000%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {children}

        {/* Bottom glow */}
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
};

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
      formData.subject ||
        `Portfolio Inquiry from ${formData.name}`
    );

    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-800/60 bg-dark-900/40 py-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="absolute bottom-0 right-[5%] h-96 w-96 rounded-full bg-indigo-600/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.8) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something Meaningful"
          subtitle="Interested in AI, software development, data, or automation? I'm open to opportunities, collaborations, and conversations around building practical technology solutions."
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* LEFT — CONTACT INFO */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="space-y-4 lg:col-span-5"
          >
            
            {/* Availability panel */}
            <motion.div
              variants={staggerChild}
              className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 via-dark-900/80 to-indigo-950/30 p-5 backdrop-blur-xl"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Radio className="h-4 w-4 text-blue-400" />

                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                      Connection Status
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    Open to Opportunities
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    Software engineering, full-stack, AI/ML and
                    technology-focused opportunities.
                  </p>
                </div>

                <div className="relative mt-1 flex h-3 w-3 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={staggerChild}>
              <InteractiveContactCard>
                <div className="relative z-10 flex items-center justify-between p-5">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: -4 }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400"
                    >
                      <Mail className="h-5 w-5" />
                    </motion.div>

                    <div className="min-w-0">
                      <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                        Email Directly
                      </div>

                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="block truncate text-sm font-semibold text-white transition-colors hover:text-blue-400"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleCopy(PERSONAL_INFO.email)}
                    className="ml-2 shrink-0 inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-dark-950 px-3 py-2.5 text-xs font-semibold text-slate-400 transition-all hover:border-blue-500/30 hover:text-white"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? (
                      <><Check className="h-4 w-4 text-emerald-400" /><span className="text-emerald-400">Copied</span></>
                    ) : (
                      <><Copy className="h-4 w-4" /><span>Copy</span></>
                    )}
                  </motion.button>
                </div>
              </InteractiveContactCard>
            </motion.div>

            {/* Social cards */}
            <motion.div
              variants={staggerChild}
              className="grid grid-cols-2 gap-4 pt-1"
            >
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group/social relative overflow-hidden rounded-xl border border-slate-800 bg-dark-900/70 p-4 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30"
                aria-label="LinkedIn profile"
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover/social:opacity-100" />

                <div className="relative z-10 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400">
                    <Linkedin className="h-4 w-4" />
                  </div>

                  <div>
                    <div className="text-xs font-bold text-slate-200">
                      LinkedIn
                    </div>

                    <div className="mt-0.5 flex items-center gap-0.5 font-mono text-xs text-slate-500 transition-colors group-hover/social:text-blue-400">
                      Connect
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="group/social relative overflow-hidden rounded-xl border border-slate-800 bg-dark-900/70 p-4 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30"
                aria-label="GitHub profile"
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-purple-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover/social:opacity-100" />

                <div className="relative z-10 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600/10 text-purple-400">
                    <Github className="h-4 w-4" />
                  </div>

                  <div>
                    <div className="text-xs font-bold text-slate-200">
                      GitHub
                    </div>

                    <div className="mt-0.5 flex items-center gap-0.5 font-mono text-xs text-slate-500 transition-colors group-hover/social:text-purple-400">
                      Profile
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* Response notice */}
            <motion.div
              variants={staggerChild}
              className="relative overflow-hidden rounded-xl border border-slate-800 bg-dark-950/70 p-4 backdrop-blur-xl"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />

                <p className="font-mono text-xs leading-relaxed text-slate-500">
                  Available for software engineering, full-stack,
                  and AI/ML opportunities. Typically responds within
                  24 hours.
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
            <InteractiveContactCard className="h-full">
              <form
                onSubmit={handleSubmit}
                className="relative z-10 h-full p-6 sm:p-8"
              >
                
                {/* Form header */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-blue-400" />

                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-blue-400">
                        Communication Terminal
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      Send a Message
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Start a conversation directly from the portfolio.
                    </p>
                  </div>

                  <div className="hidden rounded-lg border border-slate-800 bg-dark-950 p-2 sm:block">
                    <MessageSquare className="h-4 w-4 text-slate-500" />
                  </div>
                </div>

                {/* Input grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400"
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
                      className="w-full rounded-xl border border-slate-800 bg-dark-950/80 px-3.5 py-3 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 focus:border-blue-500/60 focus:bg-dark-950 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400"
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
                      className="w-full rounded-xl border border-slate-800 bg-dark-950/80 px-3.5 py-3 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 focus:border-blue-500/60 focus:bg-dark-950 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mt-4">
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400"
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
                    placeholder="Opportunity / Collaboration / Project"
                    className="w-full rounded-xl border border-slate-800 bg-dark-950/80 px-3.5 py-3 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 focus:border-blue-500/60 focus:bg-dark-950 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Message */}
                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="font-mono text-xs uppercase tracking-wider text-slate-400"
                    >
                      Message *
                    </label>

                    <span className="font-mono text-[11px] text-slate-700">
                      REQUIRED
                    </span>
                  </div>

                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Hi Gnaneshwar, I'd like to discuss..."
                    className="w-full resize-none rounded-xl border border-slate-800 bg-dark-950/80 px-3.5 py-3 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 focus:border-blue-500/60 focus:bg-dark-950 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.01,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group/send mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/30"
                >
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover/send:translate-x-1 group-hover/send:-translate-y-0.5" />

                  <span>Send Message</span>

                  <ExternalLink className="h-3.5 w-3.5 opacity-50 transition-transform duration-300 group-hover/send:translate-x-0.5 group-hover/send:-translate-y-0.5" />
                </motion.button>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-center gap-2 text-center">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                  <p className="font-mono text-xs leading-relaxed text-slate-600">
                    Opens your default email client and sends directly to{' '}
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </form>
            </InteractiveContactCard>
          </motion.div>
        </div>

        {/* Bottom CTA removed — duplicate of form header CTA */}
      </div>
    </section>
  );
};
