import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { CustomCursor } from './components/CustomCursor';
import { NavbarEditorial } from './components/NavbarEditorial';
import { Hero360 } from './components/Hero360';
import { Marquee } from './components/Marquee';
import { AboutEditorial } from './sections/AboutEditorial';
import { WorkEditorial } from './sections/WorkEditorial';
import { SkillsEditorial } from './sections/SkillsEditorial';
import { Services } from './sections/Services';
import { AchievementsEditorial } from './sections/AchievementsEditorial';
import { ContactEditorial } from './sections/ContactEditorial';
import { FinalCTA } from './sections/FinalCTA';
import { FooterEditorial } from './components/FooterEditorial';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-slate-200 selection:bg-white selection:text-dark-950">
      <CustomCursor />
      <NavbarEditorial />
      <main>
        <Hero360 />
        <Marquee />
        <AboutEditorial />
        <WorkEditorial />
        <SkillsEditorial />
        <Services />
        <AchievementsEditorial />
        <ContactEditorial />
        <FinalCTA />
      </main>
      <FooterEditorial />
    </div>
  );
}

export default App;
