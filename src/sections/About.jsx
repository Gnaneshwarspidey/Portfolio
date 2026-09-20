import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ABOUT_TEXT, PERSONAL_INFO } from '../data/portfolioData';
import { fadeUp, stagger, staggerChild, VIEWPORT } from '../hooks/useMotion';

import {
  BrainCircuit,
  Layers,
  Workflow,
  Terminal,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code2,
  Database,
  Cpu,
  Activity,
  UserRound,
  Zap,
} from 'lucide-react';


/* ---------------------------------------
   Interactive Bio Card
---------------------------------------- */

const BioCard = ({ children }) => {
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

    const rotateY = (x - 50) / 13;
    const rotateX = (50 - y) / 13;

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
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition:
          'transform 180ms cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
      className="group relative"
    >

      {/* Animated Border */}

      <div
        className={`
          absolute
          -inset-[1px]
          rounded-[28px]
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

      {/* Card */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/[0.09]
          bg-dark-950/80
          shadow-2xl
          backdrop-blur-xl
        "
      >

        {/* Spotlight */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
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

        {/* Top scan */}

        <motion.div
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{
            duration: 1.3,
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
            -right-32
            -top-32
            h-72
            w-72
            rounded-full
            bg-cyan-400/[0.06]
            blur-3xl
            transition-all
            duration-700
            group-hover:scale-125
            group-hover:bg-cyan-400/[0.11]
          "
        />

        <div className="relative z-10">
          {children}
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
   About Section
---------------------------------------- */

export const About = () => {

  const capabilityIcons = [
    <BrainCircuit className="h-5 w-5 text-cyan-400" />,
    <Layers className="h-5 w-5 text-blue-400" />,
    <Workflow className="h-5 w-5 text-purple-400" />,
  ];

  const stackItems = [
    {
      label: '01. Frontend',
      color: 'text-blue-400',
      desc: 'React, JS, Tailwind',
      icon: Code2,
    },
    {
      label: '02. Backend',
      color: 'text-indigo-400',
      desc: 'Python, Flask, APIs',
      icon: Terminal,
    },
    {
      label: '03. Databases',
      color: 'text-cyan-400',
      desc: 'SQL, MongoDB, Supabase',
      icon: Database,
    },
    {
      label: '04. AI / ML',
      color: 'text-emerald-400',
      desc: 'Machine Learning, NLP',
      icon: BrainCircuit,
    },
    {
      label: '05. Data',
      color: 'text-amber-400',
      desc: 'Pandas, NumPy, Plots',
      icon: Activity,
    },
    {
      label: '06. Automation',
      color: 'text-violet-400',
      desc: 'Git, Scripting, Excel',
      icon: Zap,
    },
  ];

  return (
    <section
      id="about"
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
          Background Effects
      ------------------------------------ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Left glow */}

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

        {/* Right glow */}

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-600/[0.07]
            blur-[140px]
          "
        />

        {/* Center animated glow */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
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
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400
            blur-[180px]
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

        {/* -----------------------------------
            Heading
        ------------------------------------ */}

        <SectionHeading
          badge="About Me"
          title="Engineering Practical Solutions Across AI & Software"
          subtitle="A look into my engineering mindset, technical breadth, and the systems I enjoy building."
        />


        {/* -----------------------------------
            Main Layout
        ------------------------------------ */}

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">


          {/* -----------------------------------
              Bio
          ------------------------------------ */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="lg:col-span-7"
          >

            <BioCard>

              <div className="p-6 sm:p-8">

                {/* Terminal Header */}

                <div className="mb-7 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-cyan-400/20
                        bg-cyan-400/[0.06]
                        text-cyan-400
                      "
                    >
                      <Terminal className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/70">
                        Developer Profile
                      </div>

                      <div className="mt-0.5 text-xs text-slate-500">
                        Engineering mindset
                      </div>
                    </div>

                  </div>


                  <div className="flex items-center gap-2">

                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>

                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400/70">
                      Online
                    </span>

                  </div>

                </div>


                {/* Bio intro */}

                <div className="relative">

                  <div
                    className="
                      absolute
                      -left-1
                      top-0
                      h-full
                      w-px
                      bg-gradient-to-b
                      from-cyan-400
                      via-blue-500/30
                      to-transparent
                    "
                  />

                  <p className="pl-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {ABOUT_TEXT.intro}
                  </p>

                </div>


                <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
                  {ABOUT_TEXT.summary}
                </p>


                {/* Separator */}

                <div className="my-7 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />


                {/* Stack heading */}

                <div className="mb-4 flex items-center justify-between">

                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                      // Core Competency Layers
                    </div>

                    <div className="mt-1 text-xs text-slate-600">
                      Technical stack architecture
                    </div>
                  </div>

                  <Cpu className="h-4 w-4 text-cyan-400/50" />

                </div>


                {/* Stack Grid */}

                <motion.div
                  variants={stagger(0.07)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="grid grid-cols-2 gap-2.5 sm:grid-cols-3"
                >

                  {stackItems.map((item) => {

                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.label}
                        variants={staggerChild}
                        whileHover={{
                          y: -4,
                          scale: 1.02,
                        }}
                        className="
                          group/stack
                          relative
                          overflow-hidden
                          rounded-xl
                          border
                          border-white/[0.06]
                          bg-white/[0.02]
                          p-3
                          transition-all
                          duration-300
                          hover:border-cyan-400/20
                          hover:bg-cyan-400/[0.035]
                        "
                      >

                        {/* Shine */}

                        <span
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            -translate-x-full
                            bg-gradient-to-r
                            from-transparent
                            via-white/[0.05]
                            to-transparent
                            transition-transform
                            duration-700
                            group-hover/stack:translate-x-full
                          "
                        />

                        <div className="relative z-10">

                          <div className="mb-2 flex items-center justify-between">

                            <span
                              className={`font-mono text-xs font-semibold ${item.color}`}
                            >
                              {item.label}
                            </span>

                            <Icon
                              className="
                                h-3.5
                                w-3.5
                                text-slate-600
                                transition-colors
                                duration-300
                                group-hover/stack:text-cyan-400
                              "
                            />

                          </div>

                          <span className="text-xs leading-relaxed text-slate-500">
                            {item.desc}
                          </span>

                        </div>

                      </motion.div>
                    );
                  })}

                </motion.div>


                {/* Bottom profile indicator */}

                <div className="mt-7 flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <UserRound className="h-3.5 w-3.5 text-slate-600" />

                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-600">
                      {PERSONAL_INFO?.role || 'AI & ML Student'}
                    </span>

                  </div>

                  <span className="font-mono text-[11px] text-cyan-400/50">
                    PROFILE_READY
                  </span>

                </div>

              </div>

            </BioCard>

          </motion.div>


          {/* -----------------------------------
              Capabilities
          ------------------------------------ */}

          <div className="lg:col-span-5">

            <div className="mb-4 flex items-center justify-between px-1">

              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  What I Build & Deliver
                </span>
              </div>

              <Sparkles className="h-4 w-4 text-cyan-400/50" />

            </div>


            <motion.div
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="space-y-3"
            >

              {ABOUT_TEXT.capabilities.map((cap, index) => (

                <motion.div
                  key={cap.title}
                  variants={staggerChild}
                  whileHover={{
                    y: -5,
                    x: 3,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-dark-950/75
                    p-5
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-cyan-400/20
                    hover:shadow-[0_15px_50px_rgba(34,211,238,0.06)]
                  "
                >

                  {/* Spotlight */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-cyan-400/[0.05]
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:scale-150
                      group-hover:bg-cyan-400/[0.10]
                    "
                  />


                  <div className="relative z-10 flex items-start gap-4">

                    {/* Number + icon */}

                    <div className="flex flex-col items-center gap-2">

                      <div
                        className="
                          relative
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/[0.08]
                          bg-white/[0.025]
                          transition-all
                          duration-300
                          group-hover:border-cyan-400/25
                          group-hover:bg-cyan-400/[0.06]
                        "
                      >
                        {capabilityIcons[index]}

                        <span
                          className="
                            absolute
                            inset-0
                            rounded-xl
                            border
                            border-cyan-400/0
                            transition-all
                            duration-500
                            group-hover:scale-110
                            group-hover:border-cyan-400/20
                          "
                        />

                      </div>

                      <span className="font-mono text-[11px] text-slate-700">
                        0{index + 1}
                      </span>

                    </div>


                    <div className="flex-1">

                      <div className="mb-1 flex items-center justify-between gap-3">

                        <h4
                          className="
                            text-sm
                            font-semibold
                            text-white
                            transition-colors
                            duration-300
                            group-hover:text-cyan-300
                          "
                        >
                          {cap.title}
                        </h4>

                        <ArrowUpRight
                          className="
                            h-3.5
                            w-3.5
                            text-slate-700
                            transition-all
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:text-cyan-400
                          "
                        />

                      </div>

                      <p className="text-xs leading-relaxed text-slate-400">
                        {cap.description}
                      </p>

                    </div>

                  </div>


                  {/* Bottom progress line */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-0
                      bg-cyan-400
                      shadow-[0_0_15px_rgba(34,211,238,0.7)]
                      transition-all
                      duration-500
                      group-hover:w-1/2
                    "
                  />

                </motion.div>

              ))}

            </motion.div>


            {/* -----------------------------------
                Contact CTA
            ------------------------------------ */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                mt-5
                overflow-hidden
                rounded-2xl
                border
                border-cyan-400/20
                bg-gradient-to-br
                from-cyan-400/[0.08]
                via-blue-500/[0.05]
                to-purple-500/[0.07]
                p-5
                shadow-[0_0_50px_rgba(34,211,238,0.04)]
              "
            >

              {/* Animated background */}

              <motion.div
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  pointer-events-none
                  absolute
                  top-0
                  h-px
                  w-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-400/60
                  to-transparent
                "
              />

              <div className="relative z-10 flex items-center justify-between gap-4">

                <div>

                  <div className="mb-1 flex items-center gap-2">

                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>

                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-400/80">
                      Available
                    </span>

                  </div>

                  <div className="text-sm font-bold text-white">
                    Open to Opportunities
                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    Let's build something useful.
                  </p>

                </div>


                <a
                  href="#contact"
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-cyan-300
                    transition-all
                    duration-300
                    hover:border-cyan-400/40
                    hover:bg-cyan-400/15
                    hover:text-white
                    hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
                  "
                >
                  Get in touch

                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </a>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};
