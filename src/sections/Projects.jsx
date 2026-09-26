import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { PROJECTS } from '../data/portfolioData';
import { Github } from '../components/SocialIcons';
import bazarByteImg from '../assets/BazarByte.png';
import greenPulseImg from '../assets/GreenPulse.png';
import eventHubImg from '../assets/EventHub.png';

const PROJECT_IMAGES = {
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
  const cardRef = useRef(null);

  const [transform, setTransform] = useState(
    'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)'
  );

  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    setMousePosition({
      x,
      y,
    });

    const rotateY = (x - 50) / 9;
    const rotateX = (50 - y) / 9;

    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.025)`
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)'
    );

    setMousePosition({
      x: 50,
      y: 50,
    });
  };

  return (
    <motion.article
      ref={cardRef}
      variants={staggerChild}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: 'preserve-3d',
      }}
      className="
        group
        relative
        h-full
        rounded-3xl
        transition-transform
        duration-200
        ease-out
        will-change-transform
      "
    >

      {/* =================================================
          OUTER GLOW
      ================================================= */}
      <div
        className="
          absolute
          -inset-[1px]
          rounded-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-gradient-to-r
          from-cyan-400/50
          via-blue-500/40
          to-purple-500/50
          blur-[1px]
        "
      />

      {/* =================================================
          CARD
      ================================================= */}
      <div
        className="
          relative
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-white/[0.10]
          bg-dark-950/75
          backdrop-blur-xl
          shadow-2xl
          transition-all
          duration-500
          group-hover:border-white/[0.20]
          group-hover:shadow-blue-500/10
        "
      >

        {/* Cursor spotlight */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
          style={{
            background: `radial-gradient(
              350px circle at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(96,165,250,0.13),
              transparent 55%
            )`,
          }}
        />

        {/* =================================================
            PROJECT VISUAL
        ================================================= */}
        <div className="relative h-56 sm:h-64 overflow-hidden">

          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <img
              src={PROJECT_IMAGES[project.id]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Visual overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />

          {/* Number */}
          <div className="absolute top-4 left-4 z-10">
            <div
              className="
                flex
                items-center
                justify-center
                w-8
                h-8
                rounded-full
                bg-black/40
                backdrop-blur-xl
                border
                border-white/10
              "
            >
              <span className="text-xs font-mono text-cyan-300">
                {index + 1}
              </span>
            </div>
          </div>

          {/* Hover icon */}
          <div
            className="
              absolute
              bottom-4
              right-4
              z-10
              w-10
              h-10
              rounded-full
              bg-white
              text-black
              flex
              items-center
              justify-center
              opacity-0
              translate-y-3
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all
              duration-300
            "
          >
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}
        <div
          className="relative z-10 p-6"
          style={{
            transform: 'translateZ(25px)',
          }}
        >

          {/* Title */}
          <h3
            className="
              text-xl
              sm:text-2xl
              font-bold
              text-white
              mb-2
              tracking-tight
              group-hover:text-cyan-200
              transition-colors
              duration-300
            "
          >
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-xs font-medium text-white/60 mb-3">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-sm text-white/50 leading-relaxed line-clamp-3 mb-5">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-6">

            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="
                  px-2.5
                  py-1
                  rounded-lg
                  bg-white/[0.04]
                  border
                  border-white/[0.08]
                  text-xs
                  font-mono
                  text-white/60
                  group-hover:border-cyan-300/20
                  group-hover:text-cyan-200/80
                  transition-all
                  duration-300
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
                  rounded-lg
                  bg-white/[0.04]
                  border
                  border-white/[0.08]
                  text-xs
                  font-mono
                  text-white/40
                "
              >
                +{project.technologies.length - 5}
              </span>
            )}

          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.08] mb-5" />

          {/* Actions */}
          <div className="flex items-center justify-between">

            <button
              onClick={() => onSelect(project)}
              className="
                group/btn
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                border
                border-cyan-400/25
                bg-cyan-400/[0.07]
                text-xs
                font-semibold
                text-cyan-300
                hover:bg-cyan-400/[0.14]
                hover:border-cyan-400/40
                hover:text-white
                transition-all
                duration-200
              "
            >
              Project Overview

              <ChevronRight
                className="
                  w-4
                  h-4
                  transition-transform
                  duration-300
                  group-hover/btn:translate-x-1
                "
              />
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="
                flex
                items-center
                gap-1.5
                px-3
                py-2
                rounded-xl
                bg-white/[0.04]
                border
                border-white/[0.08]
                text-white/50
                text-xs
                font-semibold
                hover:text-white
                hover:bg-white/[0.08]
                hover:border-white/20
                transition-all
                duration-300
              "
              aria-label={`View ${project.title} GitHub repository`}
            >
              <Github className="w-4 h-4" />
              Code
            </a>

          </div>
        </div>

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-2/3
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400/40
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
          "
        />

      </div>
    </motion.article>
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
        py-28
        overflow-hidden
        bg-dark-950
        border-y
        border-white/[0.06]
      "
    >

      {/* =================================================
          BACKGROUND ATMOSPHERE
      ================================================= */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            top-1/4
            left-1/4
            w-[500px]
            h-[300px]
            rounded-full
            bg-blue-600/[0.07]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-1/4
            right-1/4
            w-[450px]
            h-[300px]
            rounded-full
            bg-purple-600/[0.06]
            blur-[130px]
          "
        />

        <div className="absolute inset-0 bg-grid-pattern opacity-[0.12]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =================================================
            HEADING
        ================================================= */}

        <SectionHeading
          badge="Featured Engineering Work"
          title="Projects That Solve Real Problems"
          subtitle="AI, machine learning, full-stack platforms, and engineering experiments built from idea to implementation."
        />

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <motion.div
          variants={stagger(0.16)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
            lg:gap-8
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

      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              p-4
              bg-black/80
              backdrop-blur-xl
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
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 15,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                w-full
                max-w-3xl
                max-h-[90vh]
                overflow-y-auto
                rounded-3xl
                bg-dark-950/95
                backdrop-blur-2xl
                border
                border-white/[0.12]
                shadow-2xl
                shadow-black/50
                p-6
                sm:p-8
              "
            >

              {/* Modal glow */}
              <div
                className="
                  absolute
                  -top-20
                  left-1/2
                  -translate-x-1/2
                  w-72
                  h-40
                  rounded-full
                  bg-blue-500/10
                  blur-[80px]
                  pointer-events-none
                "
              />

              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="
                  absolute
                  top-5
                  right-5
                  z-10
                  w-10
                  h-10
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  bg-white/[0.05]
                  border
                  border-white/[0.10]
                  text-white/50
                  hover:text-white
                  hover:bg-white/[0.10]
                  transition-all
                "
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal heading */}
              <div className="relative mb-6 pr-12">

                <div className="flex items-center gap-2 mb-2">

                  <Sparkles className="w-4 h-4 text-cyan-300" />

                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
                    {selectedProject.category}
                  </span>

                </div>

                <h3
                  id="modal-title"
                  className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-white
                    tracking-tight
                  "
                >
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-white/50 mt-2">
                  {selectedProject.tagline}
                </p>

              </div>

              {/* Modal visual */}
              <div
                className="
                  h-48
                  sm:h-56
                  rounded-2xl
                  overflow-hidden
                  mb-7
                  border
                  border-white/[0.10]
                "
              >
                <img
                  src={PROJECT_IMAGES[selectedProject.id]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Architecture */}
              <div className="mb-7">

                <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 font-semibold mb-3">
                  Project Architecture & Implementation
                </h4>

                <p className="text-sm text-white/65 leading-relaxed">
                  {selectedProject.description}
                </p>

              </div>

              {/* Highlights */}
              <div className="mb-7">

                <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 font-semibold mb-3">
                  Key Technical Capabilities
                </h4>

                <ul className="space-y-3">

                  {selectedProject.highlights.map(
                    (highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-white/65"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />

                        <span>{highlight}</span>
                      </li>
                    )
                  )}

                </ul>

              </div>

              {/* Technologies */}
              <div className="mb-7">

                <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 font-semibold mb-3">
                  Technologies Utilized
                </h4>

                <div className="flex flex-wrap gap-2">

                  {selectedProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        px-3
                        py-1.5
                        rounded-lg
                        bg-white/[0.04]
                        border
                        border-white/[0.08]
                        text-xs
                        font-mono
                        text-cyan-200/80
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
                  pt-5
                  border-t
                  border-white/[0.08]
                  flex
                  flex-wrap
                  items-center
                  justify-end
                  gap-3
                "
              >

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    bg-white
                    text-black
                    text-xs
                    font-semibold
                    transition-all
                    hover:-translate-y-0.5
                  "
                >
                  <Github className="w-4 h-4" />

                  View on GitHub

                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="
                    px-5
                    py-3
                    rounded-xl
                    bg-white/[0.05]
                    hover:bg-white/[0.10]
                    text-white/70
                    hover:text-white
                    text-xs
                    font-semibold
                    border
                    border-white/[0.10]
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
