import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useAnimate } from "./useAnimate";

type Props = {
  onAnimationComplete: () => void;
};

const Welcome: React.FC<Props> = ({ onAnimationComplete }) => {
  const { fade } = useAnimate();

  return (
    <motion.p
      className="signup__welcome"
      layoutId="signup-welcome"
      onAnimationComplete={onAnimationComplete}
      {...fade("in", 0.5, 2)}
    >
      Welcome to Vim!
    </motion.p>
  );
};

export default Welcome;
