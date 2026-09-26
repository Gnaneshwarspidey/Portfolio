import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
      className={`relative mb-12 ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <motion.div
          variants={fadeDown}
          className={`mb-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        >
          <span className="relative inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="relative h-2 w-2 rounded-full bg-amber-400" />
            </span>

            {eyebrow}

            <Sparkles className="h-3.5 w-3.5 text-amber-400/80" />
          </span>

          {!centered && (
            <div className="hidden h-px w-16 bg-gradient-to-r from-amber-500/30 to-transparent sm:block" />
          )}
        </motion.div>
      )}

      <motion.div variants={fadeUp} className="relative inline-block">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <motion.div
          initial={{ scaleX: 0, originX: centered ? 0.5 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT_SECTION}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`mt-3.5 h-0.5 w-20 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-transparent ${
            centered ? "mx-auto" : ""
          }`}
        />
      </motion.div>

      {description && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

export { SectionHeading };
export default SectionHeading;
