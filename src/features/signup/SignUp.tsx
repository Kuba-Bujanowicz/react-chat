import SignUpEmailStep from './SignUpEmailStep';
import { FormHelper } from '../../common/helpers/FormHelper';
import { SignUpData } from '../../common/models/Auth';
import { useState } from 'react';
import SignUpUsernameStep from './SignUpUsernameStep';
import { AnimatePresence, motion } from 'framer-motion';
import Welcome from './Welcome';

const SignUp = () => {
  const [state, setState] = useState<SignUpData>({} as SignUpData);
  const binder = new FormHelper<SignUpData>(setState);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevState) => prevState + 1);
  };

  return (
    <motion.main className='signup'>
      <AnimatePresence>
        {currentStep === 0 ? <Welcome key='step-0' handleNextStep={handleNextStep} /> : null}
        {currentStep > 0 && <SignUpEmailStep key='step-1' binder={binder} state={state} handleNextStep={handleNextStep} />}
        {currentStep > 1 && <SignUpUsernameStep key='step-2' binder={binder} state={state} handleNextStep={handleNextStep} />}
      </AnimatePresence>
    </motion.main>
  );
};

export default SignUp;
