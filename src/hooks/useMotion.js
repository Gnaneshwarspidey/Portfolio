/**
 * Global motion system
 * ─────────────────────
 * Centralised animation constants and reusable Framer Motion
 * variant factories that respect `prefers-reduced-motion`.
 *
 * Usage:
 *   import { fadeUp, stagger, DURATION } from '../hooks/useMotion';
 *   <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} />
 */

// ─── Durations (seconds) ──────────────────────────────────────
export const DURATION = {
  fast:    0.15,
  normal:  0.30,
  section: 0.60,
  slow:    0.90,
};

// ─── Easings ─────────────────────────────────────────────────
export const EASE = {
  out:    [0.16, 1, 0.3, 1],   // expo-out – snappy, premium feel
  in:     [0.4, 0, 1, 1],
  inOut:  [0.4, 0, 0.2, 1],
};

// ─── Shared viewport options ──────────────────────────────────
export const VIEWPORT = { once: true, margin: '-80px' };

// ─── Variant factories ────────────────────────────────────────

/** Fade up – the workhorse section reveal. */
export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.section, ease: EASE.out },
  },
};

/** Fade in (no vertical movement) */
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASE.out },
  },
};

/** Scale-in: subtle pop for cards / pills */
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.normal, ease: EASE.out },
  },
};

/**
 * Stagger container – wraps children so they animate sequentially.
 * @param {number} staggerChildren  - seconds between each child
 * @param {number} delayChildren    - delay before first child starts
 */
export const stagger = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden:  {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Child variant for stagger containers (combines with fadeUp) */
export const staggerChild = fadeUp;
