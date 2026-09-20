import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { EXPERIENCE } from '../data/portfolioData';
import { fadeUp, VIEWPORT } from '../hooks/useMotion';

import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Building2,
  ArrowUpRight,
  Sparkles,
  Activity,
  Code2,
} from 'lucide-react';


/* ---------------------------------------
   Interactive Experience Card
---------------------------------------- */

const ExperienceCard = ({ exp, index }) => {
  const cardRef = useRef(null);

  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const [transform, setTransform] = useState(
    'perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)'
  );

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });

    const rotateY = (x - 50) / 14;
    const rotateX = (50 - y) / 14;

    setTransform(
      `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`
    );
  };

  const handleMouseLeave = () => {
    setMousePosition({
      x: 50,
      y: 50,
    });

    setTransform(
      'perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)'
    );

    setIsHovered(false);
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition:
          'transform 180ms cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
      className="relative pl-12 sm:pl-16"
    >

      {/* -----------------------------------
          Timeline Node
      ------------------------------------ */}

      <div
        className="
          absolute
          left-0
          top-8
          z-20
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/30
          bg-dark-950
          shadow-[0_0_25px_rgba(34,211,238,0.12)]
        "
      >
        <div
          className={`
            relative
            flex
            h-3
            w-3
            items-center
            justify-center
            rounded-full
            bg-cyan-400
            transition-all
            duration-500
            ${isHovered ? 'scale-125 shadow-[0_0_15px_rgba(34,211,238,0.9)]' : ''}
          `}
        >
          {isHovered && (
            <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400/50" />
          )}
        </div>
      </div>


      {/* -----------------------------------
          Animated Card Border
      ------------------------------------ */}

      <div
        className={`
          absolute
          -inset-[1px]
          rounded-[26px]
          bg-gradient-to-r
          from-cyan-400/0
          via-blue-500/0
          to-purple-500/0
          blur-[1px]
          transition-all
          duration-500
          ${
            isHovered
              ? 'from-cyan-400/50 via-blue-500/40 to-purple-500/50 opacity-100'
              : 'opacity-0'
          }
        `}
      />


      {/* -----------------------------------
          Main Card
      ------------------------------------ */}

      <div
        ref={cardRef}
        className="
          group
          relative
          overflow-hidden
          rounded-[26px]
          border
          border-white/[0.09]
          bg-dark-950/80
          backdrop-blur-xl
          shadow-2xl
        "
      >

        {/* Cursor Spotlight */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
          style={{
            background: `
              radial-gradient(
                500px circle at ${mousePosition.x}% ${mousePosition.y}%,
                rgba(34,211,238,0.12),
                transparent 45%
              )
            `,
          }}
        />

        {/* Grid */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
            bg-[size:36px_36px]
          "
        />

        {/* Top scanning line */}
        <motion.div
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{
            duration: 1.2,
            ease: 'easeInOut',
          }}
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
            opacity-70
          "
        />

        {/* Ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            bg-blue-500/[0.07]
            blur-3xl
            transition-all
            duration-700
            group-hover:scale-125
            group-hover:bg-cyan-400/[0.12]
          "
        />

        <div className="relative z-10 p-6 sm:p-8">

          {/* -----------------------------------
              Header
          ------------------------------------ */}

          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

            <div className="flex items-start gap-4">

              {/* Company Icon */}
              <motion.div
                whileHover={{
                  rotate: [0, -6, 6, 0],
                  scale: 1.06,
                }}
                transition={{ duration: 0.5 }}
                className="
                  relative
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-cyan-400/[0.06]
                  text-cyan-400
                  shadow-[0_0_30px_rgba(34,211,238,0.06)]
                "
              >
                <Briefcase className="h-5 w-5" />

                <span
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    border
                    border-cyan-400/0
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:border-cyan-400/30
                  "
                />
              </motion.div>

              <div>

                {/* Experience Number */}
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/70">
                    Experience 0{index + 1}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-cyan-400/60" />

                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    Professional
                  </span>
                </div>

                {/* Type */}
                <div
                  className="
                    mb-2
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-lg
                    border
                    border-cyan-400/15
                    bg-cyan-400/[0.05]
                    px-2.5
                    py-1
                    font-mono
                    text-xs
                    uppercase
                    tracking-wider
                    text-cyan-400
                  "
                >
                  <Activity className="h-3 w-3" />
                  {exp.type}
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-cyan-300
                  "
                >
                  {exp.role}
                </h3>

                <div className="mt-1.5 flex items-center gap-2 text-sm font-medium text-slate-300">
                  <Building2 className="h-4 w-4 text-slate-500" />
                  <span>{exp.company}</span>
                </div>
              </div>
            </div>


            {/* Date */}
            <div
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-xl
                border
                border-white/[0.07]
                bg-white/[0.025]
                px-3
                py-2
                font-mono
                text-xs
                text-slate-400
              "
            >
              <Calendar className="h-3.5 w-3.5 text-cyan-400" />
              {exp.period}
            </div>

          </div>


          {/* Divider */}
          <div className="my-7 h-px bg-gradient-to-r from-white/[0.09] via-white/[0.04] to-transparent" />


          {/* -----------------------------------
              Summary
          ------------------------------------ */}

          <div className="relative mb-7">

            <div className="absolute -left-1 top-0 h-full w-px bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent" />

            <p className="pl-5 text-sm leading-relaxed text-slate-300 sm:text-base">
              {exp.summary}
            </p>

          </div>


          {/* -----------------------------------
              Contributions
          ------------------------------------ */}

          <div className="mb-7">

            <div className="mb-4 flex items-center gap-2">
              <Code2 className="h-4 w-4 text-cyan-400" />

              <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Key Workflows & Contributions
              </h4>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">

              {exp.responsibilities.map((resp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    delay: idx * 0.06,
                    duration: 0.35,
                  }}
                  className="
                    group/item
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-white/[0.05]
                    bg-white/[0.018]
                    p-3
                    transition-all
                    duration-300
                    hover:border-cyan-400/15
                    hover:bg-cyan-400/[0.035]
                  "
                >
                  <CheckCircle2
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-cyan-400/70
                      transition-all
                      duration-300
                      group-hover/item:text-cyan-400
                      group-hover/item:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]
                    "
                  />

                  <span className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {resp}
                  </span>
                </motion.div>
              ))}

            </div>
          </div>


          {/* -----------------------------------
              Technologies
          ------------------------------------ */}

          <div className="border-t border-white/[0.06] pt-5">

            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />

              <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                Technology Environment
              </span>
            </div>

            <div className="flex flex-wrap gap-2">

              {exp.technologies.map((technology, idx) => (
                <motion.span
                  key={technology}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: idx * 0.04,
                    duration: 0.3,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}
                  className="
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-3
                    py-1.5
                    font-mono
                    text-xs
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-cyan-400/25
                    hover:bg-cyan-400/[0.05]
                    hover:text-cyan-300
                    hover:shadow-[0_0_18px_rgba(34,211,238,0.07)]
                  "
                >
                  {technology}
                </motion.span>
              ))}

            </div>
          </div>

        </div>


        {/* Bottom glow */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-px
            w-0
            -translate-x-1/2
            bg-cyan-400
            shadow-[0_0_25px_5px_rgba(34,211,238,0.35)]
            transition-all
            duration-700
            group-hover:w-2/3
          "
        />

      </div>
    </motion.div>
  );
};


/* ---------------------------------------
   Experience Section
---------------------------------------- */

export const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        border-y
        border-white/[0.06]
        bg-dark-950
        py-28
      "
    >

      {/* -----------------------------------
          Background
      ------------------------------------ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Blue Glow */}
        <div
          className="
            absolute
            -left-40
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-600/[0.07]
            blur-[130px]
          "
        />

        {/* Purple Glow */}
        <div
          className="
            absolute
            -right-40
            bottom-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-600/[0.07]
            blur-[140px]
          "
        />

        {/* Cyan Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.07, 0.03],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400
            blur-[170px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
            bg-[size:64px_64px]
          "
        />

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-dark-950 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />

      </div>


      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <SectionHeading
          badge="Career Journey"
          title="Experience in the Real World"
          subtitle="Hands-on experience applying AI, machine learning, software development, and problem-solving to practical engineering workflows."
        />


        {/* -----------------------------------
            Timeline
        ------------------------------------ */}

        <div className="relative mx-auto max-w-5xl">

          {/* Main Timeline Line */}

          <div
            className="
              absolute
              bottom-0
              left-[18px]
              top-0
              w-px
              bg-gradient-to-b
              from-cyan-400/0
              via-cyan-400/30
              to-cyan-400/0
              sm:left-[22px]
            "
          />

          {/* Animated timeline beam */}

          <motion.div
            initial={{
              height: 0,
            }}
            whileInView={{
              height: '100%',
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
            }}
            className="
              absolute
              left-[18px]
              top-0
              w-px
              bg-gradient-to-b
              from-cyan-400
              via-blue-500
              to-purple-500
              shadow-[0_0_12px_rgba(34,211,238,0.35)]
              sm:left-[22px]
            "
          />


          {/* Experience Cards */}

          <div className="space-y-8">

            {EXPERIENCE.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${index}`}
                exp={exp}
                index={index}
              />
            ))}

          </div>

        </div>


        {/* -----------------------------------
            Bottom Status
        ------------------------------------ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-14 flex justify-center"
        >

          <div
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/[0.07]
              bg-white/[0.025]
              px-5
              py-3
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/20
              hover:bg-cyan-400/[0.03]
            "
          >

            <div className="relative">
              <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

              <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400/40" />
            </div>

            <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
              Building • Learning • Evolving
            </span>

            <ArrowUpRight
              className="
                h-3.5
                w-3.5
                text-slate-600
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-cyan-400
              "
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
};
