import { useReducedMotion } from "framer-motion";

/* =========================================
   Motion Configuration
========================================= */

export const DURATION = {
  fast: 0.25,
  normal: 0.4,
  section: 0.7,
  slow: 1,
};

export const EASE = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
};

export const TRANSITION = {
  fast: {
    duration: DURATION.fast,
    ease: EASE.out,
  },
  normal: {
    duration: DURATION.normal,
    ease: EASE.out,
  },
  section: {
    duration: DURATION.section,
    ease: EASE.out,
  },
};

export const VIEWPORT = {
  once: true,
  amount: 0.2,
};

export const VIEWPORT_SECTION = {
  once: true,
  amount: 0.15,
};

/* =========================================
   Animation Variants
========================================= */

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION.section,
  },
};

export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION.section,
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: TRANSITION.normal,
  },
};

export const slideLeft = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITION.section,
  },
};

export const slideRight = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITION.section,
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: TRANSITION.section,
  },
};

/* =========================================
   STAGGER (THIS FIXES YOUR ERROR)
========================================= */

export const stagger = (
  staggerChildren = 0.08,
  delayChildren = 0
) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerChild = fadeUp;

/* =========================================
   Hover Presets
========================================= */

export const CARD_HOVER = {
  y: -6,
  scale: 1.02,
  transition: TRANSITION.fast,
};

export const BUTTON_HOVER = {
  y: -2,
  scale: 1.03,
  transition: TRANSITION.fast,
};

export const BUTTON_TAP = {
  scale: 0.97,
};

/* =========================================
   Floating Effects
========================================= */

export const FLOAT = {
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const PULSE = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* =========================================
   Hook
========================================= */

export const useMotion = () => {
  const reduced = useReducedMotion();

  return {
    reduced,
    variants: {
      fadeUp: reduced ? fadeIn : fadeUp,
      fadeDown: reduced ? fadeIn : fadeDown,
      fadeIn,
      slideLeft: reduced ? fadeIn : slideLeft,
      slideRight: reduced ? fadeIn : slideRight,
      scaleIn: reduced ? fadeIn : scaleIn,
    },
  };
};

export default useMotion;