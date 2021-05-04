export const filmCardVariant = {
  initial: {
    opacity: 0,
  },
  animated: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 1,
    },
  },
};

export const PageAnims = {
  transition: { duration: 5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const filmCardPopup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};
