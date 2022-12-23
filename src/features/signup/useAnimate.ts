export const useAnimate = () => {
  return {
    slideAndFade(sDir: 'up' | 'down' | 'left' | 'right', fDir: 'out' | 'in', duration: number = 0.5, delay: number = 0) {
      return {
        initial: { [sDir === 'up' || sDir === 'down' ? 'y' : 'x']: sDir === 'up' ? 50 : sDir === 'down' ? -50 : sDir === 'left' ? 50 : -50, opacity: fDir === 'out' ? 1 : 0 },
        animate: { [sDir === 'up' || sDir === 'down' ? 'y' : 'x']: 0, opacity: fDir === 'out' ? 0 : 1 },
        exit: { [sDir === 'up' || sDir === 'down' ? 'y' : 'x']: sDir === 'up' ? -50 : sDir === 'down' ? 50 : sDir === 'left' ? -50 : 50, opacity: fDir === 'out' ? 0 : 1 },
        transition: { duration, delay },
      };
    },

    fade(dir: 'out' | 'in', duration: number = 0.5, delay: number = 0) {
      return {
        initial: { opacity: dir === 'out' ? 1 : 0 },
        animate: { opacity: dir === 'out' ? 0 : 1 },
        exit: { opacity: 0  },
        transition: { duration, delay },
      };
    },

    fadeInOut(duration: number = 0.5, delay: number = 0) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration, delay } },
        exit: { opacity: 0 },
        transition: { duration, delay },
      };
    },
  };
};
