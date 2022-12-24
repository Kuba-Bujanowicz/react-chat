import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Welcome from "./Welcome";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleWelcomeAnimationComplete = () => {
    setIsFormVisible(true);
  };

  return (
    <main className="signup">
      <AnimatePresence>
        {/* <Welcome onAnimationComplete={handleWelcomeAnimationComplete} />
        {isFormVisible && <SignUpForm />} */}
        <h1 className="signup__title">Welcome to Vim!</h1>
        <p className="signup__subtitle">
          If you want to join our community you need to provide
          <br /> some information about yourself
        </p>
        <SignUpForm />
      </AnimatePresence>
    </main>
  );
};

export default SignUp;
