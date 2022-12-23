import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useAnimate } from "./useAnimate";

type Props = {
  onAnimationComplete: () => void;
};

const Welcome: React.FC<Props> = ({ onAnimationComplete }) => {
  const { fadeInOut } = useAnimate();
  const [isVisible, setIsVisible] = useState(true);

  const handleAnimationComplete = (variant: { opacity: number }) => {
    setIsVisible(false);
    !variant.opacity && onAnimationComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          {...fadeInOut(0.5, 2)}
          onAnimationComplete={handleAnimationComplete}
        >
          Hi
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
