import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolio360Data';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const NavbarEditorial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-950/80 backdrop-blur-md border-b border-white/10 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          
          {/* Left: SRI / Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 font-mono font-extrabold tracking-widest text-lg text-white uppercase group"
          >
            <span>{PERSONAL_INFO.brandName}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></span>
          </a>

          {/* Right Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              data-cursor="view"
              className="px-5 py-2.5 rounded-full bg-white text-dark-950 font-bold hover:bg-slate-200 transition-all active:scale-95 shadow-md flex items-center gap-1.5"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-white"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-dark-950/98 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-12 animate-fade-in text-white">
          <div className="flex items-center justify-between">
            <span className="font-mono font-bold tracking-widest text-lg uppercase">
              {PERSONAL_INFO.brandName}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-white/10 text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6 my-auto">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl sm:text-4xl font-black uppercase tracking-tight hover:text-blue-400 transition-colors"
              >
                <span className="text-xs font-mono text-slate-500 mr-3">0{idx + 1}</span>
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>{PERSONAL_INFO.email}</span>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="font-bold text-white uppercase underline"
            >
              Start A Project
            </a>
          </div>
        </div>
      )}
    </>
  );
};

