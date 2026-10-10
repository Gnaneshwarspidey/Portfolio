import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import {
fadeUp,
fadeDown,
stagger,
VIEWPORT_SECTION,
} from "../hooks/useMotion";

function SectionHeading({
eyebrow,
title,
description,
align = "left",
}) {
const centered = align === "center";

return (
<motion.div
variants={stagger(0.08)}
initial="hidden"
whileInView="visible"
viewport={VIEWPORT_SECTION}
className={`relative mb-12 ${
        centered ? "mx-auto text-center" : ""
      }`}
>
<motion.div
variants={fadeDown}
className={`mb-4 flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
> <span className="relative inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 backdrop-blur-xl"> <span className="relative flex h-2 w-2"> <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" /> <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" /> </span>


      {eyebrow}

      <Sparkles className="h-3.5 w-3.5 text-cyan-300/80" />
    </span>

    {!centered && (
      <div className="hidden h-px w-20 bg-gradient-to-r from-cyan-400/40 to-transparent sm:block" />
    )}
  </motion.div>

  <motion.div
    variants={fadeUp}
    className="relative inline-block"
  >
    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
      {title}
    </h2>

    <motion.div
      initial={{ scaleX: 0, originX: centered ? 0.5 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT_SECTION}
      transition={{
        duration: 0.7,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 ${
        centered ? "mx-auto" : ""
      }`}
    />

    <motion.div
      animate={{
        opacity: [0.35, 0.8, 0.35],
        x: [0, 5, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -right-8 -top-4 hidden text-cyan-400/50 sm:block"
    >
      <ArrowUpRight className="h-5 w-5" />
    </motion.div>
  </motion.div>

  {description && (
    <motion.p
      variants={fadeUp}
      className={`mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg ${
        centered ? "mx-auto" : ""
      }`}
    >
      {description}
    </motion.p>
  )}

  <motion.div
    variants={fadeUp}
    className={`mt-6 flex items-center gap-3 ${
      centered ? "justify-center" : ""
    }`}
  >
    <div className="h-px w-12 bg-cyan-400/30" />

    <motion.span
      animate={{
        x: [0, 8, 0],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
    />

    <div className="h-px w-24 bg-gradient-to-r from-cyan-400/20 to-transparent" />
  </motion.div>
</motion.div>


);
}

export { SectionHeading };
export default SectionHeading;
