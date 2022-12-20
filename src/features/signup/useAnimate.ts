export const useAnimate = () => {
  return {
    slide(dir: 'up' | 'down' | 'left' | 'right', duration: number = 0.5, delay: number = 0) {
      return {
        initial: { [dir === 'up' || dir === 'down' ? 'y' : 'x']: dir === 'up' ? 100 : dir === 'down' ? -100 : dir === 'left' ? 100 : -100 },
        animate: { [dir === 'up' || dir === 'down' ? 'y' : 'x']: 0 },
        exit: { [dir === 'up' || dir === 'down' ? 'y' : 'x']: dir === 'up' ? -100 : dir === 'down' ? 100 : dir === 'left' ? -100 : 100 },
        transition: { duration, delay },
      };
    },

    fade(dir: 'out' | 'in', duration: number = 0.5, delay: number = 0) {
      return {
        initial: { opacity: dir === 'out' ? 1 : 0 },
        animate: { opacity: dir === 'out' ? 0 : 1 },
        exit: { opacity: dir === 'out' ? 0 : 1 },
        transition: { duration, delay },
      };
    },

    fadeInOut(duration: number = 0.5, delay: number = 0) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration, delay },
      };
    },
  };
};
