import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
Menu,
X,
Terminal,
ArrowUpRight,
Mail,
Sparkles,
} from 'lucide-react';

import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin } from './SocialIcons';

const NAV_LINKS = [
{ name: 'Home', id: 'hero' },
{ name: 'About', id: 'about' },
{ name: 'Skills', id: 'skills' },
{ name: 'Projects', id: 'projects' },
{ name: 'Experience', id: 'experience' },
{ name: 'Certifications', id: 'certifications' },
{ name: 'Education', id: 'education' },
{ name: 'Contact', id: 'contact' },
];

export const Navbar = () => {
const [activeSection, setActiveSection] = useState('hero');
const [scrolled, setScrolled] = useState(false);
const [mobileOpen, setMobileOpen] = useState(false);

useEffect(() => {
const handleScroll = () => {
const scrollPosition = window.scrollY;


  setScrolled(scrollPosition > 30);

  let currentSection = 'hero';

  NAV_LINKS.forEach((link) => {
    const section = document.getElementById(link.id);

    if (!section) {
      return;
    }

    if (scrollPosition >= section.offsetTop - 220) {
      currentSection = link.id;
    }
  });

  setActiveSection(currentSection);
};

handleScroll();

window.addEventListener('scroll', handleScroll, {
  passive: true,
});

return () => {
  window.removeEventListener('scroll', handleScroll);
};


}, []);

useEffect(() => {
const handleResize = () => {
if (window.innerWidth >= 1024) {
setMobileOpen(false);
}
};


window.addEventListener('resize', handleResize);

return () => {
  window.removeEventListener('resize', handleResize);
};


}, []);

useEffect(() => {
if (mobileOpen) {
document.body.style.overflow = 'hidden';
} else {
document.body.style.overflow = '';
}


return () => {
  document.body.style.overflow = '';
};


}, [mobileOpen]);

const scrollToSection = (id) => {
const section = document.getElementById(id);


if (!section) {
  return;
}

section.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});

setActiveSection(id);
setMobileOpen(false);


};

const openExternal = (url) => {
if (!url || url === '#') {
return;
}


window.open(url, '_blank', 'noopener,noreferrer');


};

const email = PERSONAL_INFO?.email || '';

return (
<>
<motion.header
initial={{ y: -80, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{
duration: 0.7,
ease: [0.16, 1, 0.3, 1],
}}
className={
'fixed left-0 right-0 top-0 z-50 transition-all duration-500 ' +
(scrolled
? 'border-b border-white/10 bg-dark-950/85 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl'
: 'bg-transparent')
}
> <div className="pointer-events-none absolute inset-0 overflow-hidden"> <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" /> <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" /> </div>


    <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:32px_32px]" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-20 items-center justify-between">

        <motion.button
          type="button"
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-3"
        >
          <div className="hidden text-left sm:block">
            <div className="text-sm font-semibold tracking-[0.18em] text-white">
              {PERSONAL_INFO?.name || 'GNANESHWAR'}
            </div>

            <div className="mt-0.5 flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-cyan-300/70">
              AI & ML Student
            </div>
          </div>
        </motion.button>

        <nav className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.035] p-1.5 backdrop-blur-xl lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <motion.button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className={
                  'relative rounded-xl px-3 py-2 text-xs font-medium transition-colors duration-300 ' +
                  (isActive
                    ? 'text-white'
                    : 'text-white/55 hover:text-white')
                }
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-xl border border-cyan-300/20 bg-cyan-300/10 shadow-[0_0_20px_rgba(34,211,238,0.08)]"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {link.name}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="navbar-dot"
                    className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]"
                  />
                )}
              </motion.button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">

          <motion.button
            type="button"
            onClick={() => openExternal(PERSONAL_INFO?.github)}
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-white/70 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </motion.button>

          <motion.button
            type="button"
            onClick={() => openExternal(PERSONAL_INFO?.linkedin)}
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-white/70 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </motion.button>

          <motion.button
            type="button"
            onClick={() => {
              if (email) {
                window.location.href = 'mailto:' + email;
              }
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group ml-1 flex items-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-2.5 text-xs font-semibold text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.08)] transition-all hover:border-cyan-300/50 hover:bg-cyan-300/15"
          >
            <Mail size={14} />

            <span>Let&apos;s Connect</span>

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.button>

        </div>

        <motion.button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          whileTap={{ scale: 0.9 }}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

      </div>
    </div>

    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{
        scaleX: scrolled ? 1 : 0.35,
        opacity: scrolled ? 1 : 0.5,
      }}
      transition={{ duration: 0.6 }}
      className="absolute bottom-0 left-0 right-0 h-px origin-center bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"
    />
  </motion.header>

  <AnimatePresence>
    {mobileOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
        />

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.97,
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed left-4 right-4 top-24 z-50 overflow-hidden rounded-2xl border border-white/10 bg-dark-950/95 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:28px_28px]" />

          <div className="relative space-y-1">

            {NAV_LINKS.map((link, index) => {
              const isActive = activeSection === link.id;

              return (
                <motion.button
                  key={link.id}
                  type="button"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.035,
                    duration: 0.3,
                  }}
                  onClick={() => scrollToSection(link.id)}
                  className={
                    'group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-all ' +
                    (isActive
                      ? 'border border-cyan-300/20 bg-cyan-300/10 text-white'
                      : 'border border-transparent text-white/60 hover:border-white/10 hover:bg-white/[0.05] hover:text-white')
                  }
                >
                  <span className="flex items-center gap-3">

                    <span
                      className={
                        'h-1.5 w-1.5 rounded-full transition-all ' +
                        (isActive
                          ? 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]'
                          : 'bg-white/20 group-hover:bg-cyan-300')
                      }
                    />

                    {link.name}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="opacity-40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </motion.button>
              );
            })}

            <div className="my-2 h-px bg-white/10" />

            <div className="grid grid-cols-3 gap-2">

              <motion.button
                type="button"
                onClick={() => openExternal(PERSONAL_INFO?.github)}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-xs text-white/70"
              >
                <Github className="h-4 w-4" />
                GitHub
              </motion.button>

              <motion.button
                type="button"
                onClick={() => openExternal(PERSONAL_INFO?.linkedin)}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-xs text-white/70"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </motion.button>

              <motion.button
                type="button"
                onClick={() => {
                  if (email) {
                    window.location.href = 'mailto:' + email;
                  }
                }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-3 py-3 text-xs text-cyan-100"
              >
                <Mail size={15} />
                Email
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
