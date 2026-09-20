import React from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Certifications } from "./sections/Certifications";
import { Education } from "./sections/Education";
import { Contact } from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark-950 text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;