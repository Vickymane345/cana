import { Variants } from "framer-motion";

/* ---------------- PAGE TRANSITION ---------------- */

export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.98,
    transition: {
      duration: 0.35
    }
  }
};

/* ---------------- FADE ---------------- */

export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

/* ---------------- SLIDE ---------------- */

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

/* ---------------- SCALE ---------------- */

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut"
    }
  }
};

/* ---------------- STAGGER (Lists / Cards) ---------------- */

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};

/* ---------------- FLOATING (Hero UI) ---------------- */

export const floating: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

/* ---------------- PULSE GLOW ---------------- */

export const glowPulse: Variants = {
  animate: {
    scale: [1, 1.04, 1],
    opacity: [0.85, 1, 0.85],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

/* ---------------- HOVER CARD ---------------- */

export const cardHover = {
  whileHover: {
    scale: 1.03,
    y: -4,
    transition: {
      duration: 0.2
    }
  },
  whileTap: {
    scale: 0.97
  }
};

/* ---------------- BUTTON INTERACTION ---------------- */

export const buttonMotion = {
  whileHover: {
    scale: 1.04
  },
  whileTap: {
    scale: 0.94
  }
};

/* ---------------- ROTATING LOADER ---------------- */

export const spinner = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};