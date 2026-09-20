import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { stagger, staggerChild, VIEWPORT } from '../hooks/useMotion';

import {
  Code2,
  Layout,
  Server,
  Database,
  BrainCircuit,
  BarChart3,
  Wrench,
  CheckCircle,
  Cpu,
  Sparkles,
  ArrowUpRight,
  Zap,
} from 'lucide-react';

/* ---------------------------------------
   Interactive Skill Card
---------------------------------------- */
const SkillCard = ({ category, index }) => {
  const cardRef = useRef(null);

  const [transform, setTransform] = useState(
    'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)'
  );

  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const [isHovered, setIsHovered] = useState(false);

  const iconMap = {
    Code2,
    Layout,
    Server,
    Database,
    BrainCircuit,
    BarChart3,
    Wrench,
  };

  const IconComponent = iconMap[category.icon] || Cpu;

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });

    const rotateY = (x - 50) / 10;
    const rotateX = (50 - y) / 10;

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

    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={staggerChild}
      layout
      initial="rest"
      whileHover="hover"
      animate="rest"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition:
          'transform 180ms cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
      className={`group relative ${
        index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      {/* Animated Gradient Border */}
      <div
        className={`
          absolute -inset-[1px]
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
              ? 'from-cyan-400/60 via-blue-500/50 to-purple-500/60 opacity-100'
              : 'opacity-0'
          }
        `}
      />

      {/* Main Card */}
      <div
        className="
          relative
          h-full
          min-h-[300px]
          overflow-hidden
          rounded-[26px]
          border border-white/[0.09]
          bg-dark-950/80
          backdrop-blur-xl
          shadow-2xl
        "
      >
        {/* Cursor Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `
              radial-gradient(
                450px circle at ${mousePosition.x}% ${mousePosition.y}%,
                rgba(34,211,238,0.13),
                transparent 45%
              )
            `,
          }}
        />

        {/* Animated Grid */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            bg-[linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
            bg-[size:32px_32px]
          "
        />

        {/* Top Scan Line */}
        <motion.div
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
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

        {/* Ambient Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-56
            w-56
            rounded-full
            bg-blue-500/10
            blur-3xl
            transition-all
            duration-700
            group-hover:bg-cyan-400/15
            group-hover:scale-125
          "
        />

        <div className="relative z-10 p-6 sm:p-7">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: [0, -8, 8, 0],
                  scale: 1.08,
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
                  bg-cyan-400/[0.07]
                  text-cyan-400
                  shadow-[0_0_30px_rgba(34,211,238,0.08)]
                "
              >
                <IconComponent className="h-5 w-5" />

                <span
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    border
                    border-cyan-400/0
                    transition-all
                    duration-500
                    group-hover:border-cyan-400/30
                    group-hover:scale-110
                  "
                />
              </motion.div>

              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/70">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {category.name}
                </h3>
              </div>
            </div>

            {/* Arrow */}
            <motion.div
              animate={{
                x: isHovered ? 3 : 0,
                y: isHovered ? -3 : 0,
              }}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                border-white/[0.07]
                bg-white/[0.03]
                text-slate-500
                transition-colors
                group-hover:border-cyan-400/20
                group-hover:text-cyan-400
              "
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

          {/* Skill Count */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">
                  {category.skills.length}
                </span>

                <span className="text-xs text-slate-500">
                  technologies
                </span>
              </div>
            </div>

            <div
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                border
                border-emerald-400/15
                bg-emerald-400/[0.05]
                px-2.5
                py-1.5
              "
            >
              <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />

              <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400/80">
                Active
              </span>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: skillIndex * 0.035,
                  duration: 0.35,
                }}
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                className="
                  group/skill
                  relative
                  flex
                  items-center
                  gap-2
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  px-3
                  py-2
                  text-xs
                  font-medium
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.06]
                  hover:text-cyan-200
                  hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-slate-600
                    transition-all
                    duration-300
                    group-hover/skill:bg-cyan-400
                    group-hover/skill:shadow-[0_0_8px_rgba(34,211,238,0.8)]
                  "
                />

                {skill}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.06]
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover/skill:translate-x-full
                  "
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom Status */}
          <div className="mt-7 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </div>

              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Continuously Learning
              </span>
            </div>

            <Zap
              className="
                h-3.5
                w-3.5
                text-slate-700
                transition-colors
                duration-300
                group-hover:text-cyan-400
              "
            />
          </div>
        </div>

        {/* Bottom Glow */}
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
   Skills Section
---------------------------------------- */
export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter(
          (category) => category.id === activeCategory
        );

  return (
    <section
      id="skills"
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
        {/* Blue Glow */}
        <div
          className="
            absolute
            -left-32
            top-20
            h-96
            w-96
            rounded-full
            bg-blue-600/[0.08]
            blur-[120px]
          "
        />

        {/* Purple Glow */}
        <div
          className="
            absolute
            -right-32
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-600/[0.07]
            blur-[140px]
          "
        />

        {/* Cyan Center Glow */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            left-1/2
            top-1/3
            h-[500px]
            w-[500px]
            -translate-x-1/2
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

        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-dark-950 to-transparent" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <SectionHeading
          badge="Technical Arsenal"
          title="Skills That Power My Work"
          subtitle="A growing technical stack spanning software engineering, AI/ML, data, web development, and modern development tools."
        />

        {/* -----------------------------------
            Category Filters
        ------------------------------------ */}

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="
            relative
            mx-auto
            mb-14
            flex
            max-w-5xl
            flex-wrap
            items-center
            justify-center
            gap-2
          "
        >
          {/* Filter Background */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              -z-10
              rounded-3xl
              bg-white/[0.015]
              blur-xl
            "
          />

          {/* All */}
          <motion.button
            variants={staggerChild}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveCategory('all')}
            className={`
              relative
              overflow-hidden
              rounded-xl
              border
              px-4
              py-2.5
              text-xs
              font-semibold
              transition-all
              duration-300
              ${
                activeCategory === 'all'
                  ? 'border-cyan-400/30 bg-cyan-400/[0.10] text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.10)]'
                  : 'border-white/[0.07] bg-white/[0.025] text-slate-400 hover:border-cyan-400/20 hover:text-white'
              }
            `}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              All Categories
              <span className="font-mono text-xs opacity-60">
                {SKILL_CATEGORIES.length}
              </span>
            </span>
          </motion.button>

          {SKILL_CATEGORIES.map((category, index) => (
            <motion.button
              key={category.id}
              variants={staggerChild}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(category.id)}
              className={`
                relative
                overflow-hidden
                rounded-xl
                border
                px-3.5
                py-2.5
                text-xs
                font-semibold
                transition-all
                duration-300
                ${
                  activeCategory === category.id
                    ? 'border-cyan-400/30 bg-cyan-400/[0.10] text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.10)]'
                    : 'border-white/[0.07] bg-white/[0.025] text-slate-400 hover:border-cyan-400/20 hover:text-white'
                }
              `}
            >
              {activeCategory === category.id && (
                <motion.span
                  layoutId="activeSkillFilter"
                  className="
                    absolute
                    inset-0
                    rounded-xl
                    bg-cyan-400/[0.04]
                  "
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10 flex items-center gap-2">
                {category.name}

                <span className="font-mono text-[11px] font-normal opacity-40 ml-0.5 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* -----------------------------------
            Skill Cards
        ------------------------------------ */}

        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            variants={stagger(0.1)}
            initial="hidden"
            animate="visible"
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredCategories.map((category, index) => (
              <SkillCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* -----------------------------------
            Bottom Tech Status
        ------------------------------------ */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mx-auto
            mt-14
            flex
            max-w-3xl
            items-center
            justify-center
          "
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
              <Cpu className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:rotate-12" />

              <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/20" />
            </div>

            <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
              Always exploring new technologies
            </span>

            <div className="h-1 w-1 rounded-full bg-cyan-400" />

            <span className="font-mono text-xs text-cyan-400/70">
              2026
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
