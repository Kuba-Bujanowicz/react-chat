import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FormHelper } from "../../common/helpers/FormHelper";
import { SignUpData } from "../../common/models/Auth";
import Input from "../../components/input/Input";
import SignUpFormStepEmail from "./SignUpFormStepEmail";
import { useAnimate } from "./useAnimate";

const SignUpForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [state, setState] = useState<SignUpData>({} as SignUpData);
  const binder = new FormHelper<SignUpData>(setState);

  const handleNextStep = () => {
    setCurrentStep((prevCurrentStep) => prevCurrentStep + 1);
  };

  return (
    <form className="signup__form">
      {/* Step 1 */}
      {currentStep > 0 && (
        <SignUpFormStepEmail
          binder={binder}
          data={state.email}
          handleNextStep={handleNextStep}
        />
      )}
    </form>
  );
};

export default SignUpForm;
