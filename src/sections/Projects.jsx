import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { PROJECTS } from '../data/portfolioData';
import { Github } from '../components/SocialIcons';
import bazarByteImg from '../assets/BazarByte.png';
import greenPulseImg from '../assets/GreenPulse.png';
import eventHubImg from '../assets/EventHub.png';
import digitRecognitionImg from '../assets/DigitRecognition.jpg';

const PROJECT_IMAGES = {
  'digit-recognition': digitRecognitionImg,
  'bazar-byte': bazarByteImg,
  'green-pulse': greenPulseImg,
  'event-hub': eventHubImg,
};
import {
  fadeUp,
  stagger,
  staggerChild,
  VIEWPORT,
} from '../hooks/useMotion';

import {
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  X,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';


/* =========================================================
   3D PROJECT CARD
========================================================= */

const ProjectCard = ({
  project,
  index,
  onSelect,
}) => {
  return (
    <div className="w-full h-full">
      <motion.div
        variants={staggerChild}
        className="
          group
          relative
          h-full
          rounded-2xl
          transition-all
          duration-300
        "
      >
        {/* Card surface */}
        <div
          className="
            relative
            h-full
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.08]
            bg-dark-900/90
            backdrop-blur-xl
            shadow-lg
            transition-all
            duration-300
            group-hover:border-zinc-700
            group-hover:shadow-2xl
          "
        >

          {/* Visual Header */}
          <div className="w-full">
            <div className="relative h-52 sm:h-60 overflow-hidden">
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={PROJECT_IMAGES[project.id]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-90" />

              {/* Number badge */}
              <div className="absolute top-4 left-4 z-10">
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    px-2.5
                    py-1
                    rounded-lg
                    bg-dark-950/80
                    backdrop-blur-md
                    border
                    border-white/10
                  "
                >
                  <span className="text-xs font-mono font-semibold text-cyan-400">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-3 right-3 z-10">
                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-blue-600
                    text-white
                    flex
                    items-center
                    justify-center
                    opacity-0
                    translate-y-2
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-300
                    shadow-md
                  "
                >
                  <ArrowUpRight className="w-4 h-4 font-bold" />
                </div>
              </div>
            </div>
          </div>

          {/* Content block */}
          <div className="w-full">
            <div className="relative z-10 p-6">

              {/* Category */}
              <div className="mb-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3
                className="
                  text-xl
                  font-bold
                  text-white
                  mb-1.5
                  tracking-tight
                  group-hover:text-cyan-300
                  transition-colors
                  duration-300
                "
              >
                {project.title}
              </h3>

              {/* Tagline */}
              <p className="text-xs font-medium text-zinc-400 mb-3">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-5">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-2.5
                      py-1
                      rounded-md
                      bg-dark-950
                      border
                      border-zinc-800
                      text-xs
                      font-mono
                      text-zinc-300
                      group-hover:border-cyan-400/30
                      group-hover:text-cyan-300
                      transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span
                    className="
                      px-2.5
                      py-1
                      rounded-md
                      bg-dark-950
                      border
                      border-zinc-800
                      text-xs
                      font-mono
                      text-zinc-400
                    "
                  >
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.06] mb-5" />

              {/* Actions */}
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => onSelect(project)}
                    aria-label={`View details and architecture for ${project.title}`}
                    className="
                      group/btn
                      flex
                      items-center
                      gap-1.5
                      px-3.5
                      py-2
                      min-h-[44px]
                      rounded-xl
                      border
                      border-cyan-400/30
                      bg-cyan-400/10
                      text-xs
                      font-semibold
                      text-cyan-300
                      hover:bg-cyan-400/20
                      hover:border-cyan-400/50
                      hover:text-white
                      transition-all
                    "
                  >
                    Overview
                    <ChevronRight
                      className="
                        w-3.5
                        h-3.5
                        transition-transform
                        duration-300
                        group-hover/btn:translate-x-0.5
                      "
                    />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="
                      flex
                      items-center
                      gap-1.5
                      px-3
                      py-2
                      min-h-[44px]
                      rounded-xl
                      bg-white/[0.04]
                      border
                      border-white/10
                      text-zinc-400
                      text-xs
                      font-semibold
                      hover:text-white
                      hover:bg-white/[0.08]
                      hover:border-white/20
                      transition-all
                    "
                    aria-label={`View ${project.title} GitHub repository`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};


/* =========================================================
   FOCUS TRAP
========================================================= */

function useFocusTrap(ref, isActive) {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const focusable = ref.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const onKeyDown = (event) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isActive, ref]);
};


/* =========================================================
   PROJECTS SECTION
========================================================= */

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  useFocusTrap(modalRef, !!selectedProject);

  /* ESC closes modal */
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <section
      id="projects"
      className="
        relative
        py-24
        overflow-hidden
        bg-dark-950
        border-y
        border-white/[0.06]
      "
    >

      {/* Background Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="Featured Work"
          title="Projects & Applications"
          description="AI, machine learning platforms, and full-stack applications built with clean architecture."
        />

        {/* Project Grid */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >

          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}

        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              p-4
              bg-black/80
              backdrop-blur-md
            "
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >

            <motion.div
              ref={modalRef}
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 10,
              }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                w-full
                max-w-2xl
                max-h-[90vh]
                overflow-y-auto
                rounded-2xl
                bg-dark-950
                border
                border-white/10
                shadow-2xl
                p-6
                sm:p-8
              "
            >

              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="
                  absolute
                  top-5
                  right-5
                  z-10
                  w-11
                  h-11
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  bg-white/[0.05]
                  border
                  border-white/10
                  text-zinc-400
                  hover:text-white
                  hover:bg-white/[0.10]
                  transition-all
                "
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal heading */}
              <div className="relative mb-5 pr-10">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                    {selectedProject.category}
                  </span>
                </div>

                <h3
                  id="modal-title"
                  className="
                    text-2xl
                    font-bold
                    text-white
                    tracking-tight
                  "
                >
                  {selectedProject.title}
                </h3>

                <p className="text-xs text-zinc-400 mt-1">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Modal visual */}
              <div
                className="
                  h-48
                  rounded-xl
                  overflow-hidden
                  mb-6
                  border
                  border-white/10
                "
              >
                <img
                  src={PROJECT_IMAGES[selectedProject.id]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Architecture */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  Project Architecture & Implementation
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2.5">
                  Key Technical Capabilities
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map(
                    (highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2.5 text-xs text-zinc-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2.5">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        px-2.5
                        py-1
                        rounded-md
                        bg-dark-900
                        border
                        border-zinc-800
                        text-xs
                        font-mono
                        text-cyan-300
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal actions */}
              <div
                className="
                  pt-4
                  border-t
                  border-white/10
                  flex
                  flex-wrap
                  items-center
                  justify-end
                  gap-3
                "
              >
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2.5
                      rounded-xl
                      bg-blue-600
                      hover:bg-blue-500
                      text-white
                      text-xs
                      font-semibold
                      shadow-md
                      transition-all
                    "
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2.5
                    rounded-xl
                    bg-white/[0.08]
                    hover:bg-white/[0.14]
                    text-white
                    text-xs
                    font-semibold
                    border
                    border-white/10
                    shadow-md
                    transition-all
                  "
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="
                    px-4
                    py-2.5
                    rounded-xl
                    bg-white/[0.04]
                    hover:bg-white/[0.08]
                    text-zinc-300
                    hover:text-white
                    text-xs
                    font-semibold
                    border
                    border-white/10
                    transition-all
                  "
                >
                  Close
                </button>
              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

