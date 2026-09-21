import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { SpotlightNavbar } from './ui/spotlight-navbar';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin } from './SocialIcons';

const NAV_LINKS = [
  { name: 'Home',         id: 'hero' },
  { name: 'About',        id: 'about' },
  { name: 'Skills',       id: 'skills' },
  { name: 'Projects',     id: 'projects' },
  { name: 'Experience',   id: 'experience' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Education',    id: 'education' },
  { name: 'Contact',      id: 'contact' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);

  /* ── scroll spy ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      let current = 'hero';
      NAV_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop - 220) current = id;
      });
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── close mobile on resize ── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* ── lock body scroll when mobile open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
    setMobileOpen(false);
  };

  const openExternal = (url) => {
    if (url && url !== '#') window.open(url, '_blank', 'noopener,noreferrer');
  };

  const email = PERSONAL_INFO?.email || '';

  /* items for SpotlightNavbar */
  const spotlightItems = NAV_LINKS.map((l) => ({ label: l.name, href: `#${l.id}` }));
  const activeIndex    = NAV_LINKS.findIndex((l) => l.id === activeSection);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={
          'fixed left-0 right-0 top-0 z-50 transition-all duration-500 ' +
          (scrolled
            ? 'border-b border-white/10 bg-dark-950/85 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl'
            : 'bg-transparent')
        }
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <motion.button
              type="button"
              onClick={() => scrollTo('hero')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3"
            >
              <div className="hidden text-left sm:block">
                <div className="text-sm font-semibold tracking-[0.18em] text-white">
                  {PERSONAL_INFO?.name || 'GNANESHWAR'}
                </div>
                <div className="mt-0.5 text-xs uppercase tracking-[0.22em] text-cyan-300/70">
                  AI & ML Student
                </div>
              </div>
            </motion.button>

            {/* Desktop — SpotlightNavbar */}
            <div className="hidden lg:block">
              <SpotlightNavbar
                items={spotlightItems}
                defaultActiveIndex={activeIndex >= 0 ? activeIndex : 0}
                onItemClick={(item, idx) => scrollTo(NAV_LINKS[idx].id)}
                className="!pt-0"
              />
            </div>

            {/* Desktop right actions */}
            <div className="hidden items-center gap-2 lg:flex">
              <motion.button
                type="button"
                onClick={() => { if (email) window.location.href = 'mailto:' + email; }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group ml-1 flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500"
              >
                <Mail size={14} />
                <span>Let&apos;s Connect</span>
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <motion.button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              whileTap={{ scale: 0.9 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

          </div>
        </div>

        {/* Bottom scan line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0.35, opacity: scrolled ? 1 : 0.5 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-0 left-0 right-0 h-px origin-center bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"
        />
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-4 right-4 top-24 z-50 overflow-hidden rounded-2xl border border-white/10 bg-dark-950/95 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              <div className="relative space-y-1">
                {NAV_LINKS.map((link, index) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.button
                      key={link.id}
                      type="button"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.035, duration: 0.3 }}
                      onClick={() => scrollTo(link.id)}
                      className={
                        'group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-all ' +
                        (isActive
                          ? 'border border-cyan-300/20 bg-cyan-300/10 text-white'
                          : 'border border-transparent text-white/60 hover:border-white/10 hover:bg-white/[0.05] hover:text-white')
                      }
                    >
                      <span className="flex items-center gap-3">
                        <span className={'h-1.5 w-1.5 rounded-full transition-all ' + (isActive ? 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]' : 'bg-white/20 group-hover:bg-cyan-300')} />
                        {link.name}
                      </span>
                      <ArrowUpRight size={15} className="opacity-40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </motion.button>
                  );
                })}

                <div className="my-2 h-px bg-white/10" />

                <div className="grid grid-cols-3 gap-2">
                  <motion.button type="button" onClick={() => openExternal(PERSONAL_INFO?.github)} whileTap={{ scale: 0.96 }} className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-xs text-white/70">
                    <Github className="h-4 w-4" /> GitHub
                  </motion.button>
                  <motion.button type="button" onClick={() => openExternal(PERSONAL_INFO?.linkedin)} whileTap={{ scale: 0.96 }} className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-xs text-white/70">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </motion.button>
                  <motion.button type="button" onClick={() => { if (email) window.location.href = 'mailto:' + email; }} whileTap={{ scale: 0.96 }} className="flex items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-3 py-3 text-xs text-cyan-100">
                    <Mail size={15} /> Email
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
