export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? '-50%' : direction === 'right' ? '10%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const galleryContainerVariant = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
};

export const galleryVariant = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};
