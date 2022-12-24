import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FormHelper } from "../../common/helpers/FormHelper";
import { SignUpData } from "../../common/models/Auth";
import Input from "../../components/input/Input";
import Spinner from "../../components/spinner/Spinner";
import SignUpFormStepEmail from "./SignUpFormStepEmail";
import { useAnimate } from "./useAnimate";
import validIcon from "../../assets/icons/valid.svg";
import invalidIcon from "../../assets/icons/invalid.svg";
import Email from "../../assets/icons/email.svg";
import { ReactSVG } from "react-svg";

const SignUpForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [state, setState] = useState<SignUpData>({} as SignUpData);
  const binder = new FormHelper<SignUpData>(setState);

  const handleNextStep = () => {
    setCurrentStep((prevCurrentStep) => prevCurrentStep + 1);
  };

  return (
    // <motion.form className="signup__form" layoutId="signup-form">
    //   {/* Step 1 */}
    //   <SignUpFormStepEmail
    //     binder={binder}
    //     data={state.email}
    //     handleNextStep={handleNextStep}
    //   />
    // </motion.form>
    <form className="signup__form">
      <div className="form__ctn">
        <div className="form__field">
          <input className="form__input" type="text" required />
          <label className="form__label">Email address</label>
          <div className="form__icon">
            <ReactSVG src={Email} />
          </div>
        </div>
        {/* <p className="form__error">Error message so long soo big</p> */}
      </div>
      <Input type="text" name="email" inputName="Email" icon={Email} />
    </form>
  );
};

export default SignUpForm;
