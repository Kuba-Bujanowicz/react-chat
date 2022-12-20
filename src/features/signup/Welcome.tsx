import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useAnimate } from './useAnimate';

interface Props {
  handleNextStep: () => void;
}

const Welcome: React.FC<Props> = ({ handleNextStep }) => {
  const { fadeInOut } = useAnimate();
  const [isShow, setIsShow] = useState(true);

  const handleAnimationComplete = () => {
    setIsShow(false);
  };

  useEffect(() => {
    const timoutId = setTimeout(() => {
      !isShow && handleNextStep();
    }, 1500);

    return () => clearTimeout(timoutId);
  }, [isShow]);

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div {...fadeInOut(0.5, 1)} onAnimationComplete={handleAnimationComplete}>
          Hi
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
