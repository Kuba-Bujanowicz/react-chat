import { useState } from "react";
import { motion } from "framer-motion";
import Welcome from "./Welcome";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleWelcomeAnimationComplete = () => {
    setIsFormVisible(true);
  };

  return (
    <main className="signup">
      <Welcome onAnimationComplete={handleWelcomeAnimationComplete} />
      {isFormVisible && <SignUpForm />}
    </main>
  );
};

export default SignUp;
