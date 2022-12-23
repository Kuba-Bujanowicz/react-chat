import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimate } from "./useAnimate";
import Input from "../../components/input/Input";
import { FormHelper } from "../../common/helpers/FormHelper";
import { SignUpData } from "../../common/models/Auth";
import * as yup from "yup";

type Props = {
  data: string;
  binder: FormHelper<SignUpData>;
  handleNextStep: () => void;
};

let timerId: number;

const SignUpFormStepEmail: React.FC<Props> = ({
  handleNextStep,
  binder,
  data,
}) => {
  const [emailInputVisible, setEmailInputVisible] = useState(false);
  const { fade, fadeInOut, slideAndFade } = useAnimate();
  const [error, setError] = useState("");

  const validateEmail = async () => {
    const emailSchema = yup
      .string()
      .email(
        "Do you know how email looks? Right? If you need help just ask google"
      )
      .required("It is not how it works, you need to fill this field");

    try {
      await emailSchema.validate(data);
      setError("");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleEmailValidation = () => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      validateEmail().then(handleNextStep);
    }, 3000);
  };

  return (
    <>
      <motion.p
        key="email-label"
        layoutId="email-label"
        onAnimationComplete={setEmailInputVisible.bind(this, true)}
        {...fade("in", 0.5, 1)}
      >
        First we need your email address :)
      </motion.p>
      {emailInputVisible && (
        <motion.div key="email-input" {...slideAndFade("up", "in", 0.5, 1)}>
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            onKeyUp={handleEmailValidation}
            onChange={binder.bindText("email")}
            isLoading={false}
          />
        </motion.div>
      )}
      {error && (
        <motion.p layoutId="email-error" {...fade("in", 0.5, 1.5)}>
          {error}
        </motion.p>
      )}
    </>
  );
};

export default SignUpFormStepEmail;
