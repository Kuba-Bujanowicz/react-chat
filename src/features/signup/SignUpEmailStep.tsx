import { AnimateSharedLayout, motion } from 'framer-motion';
import { KeyboardEventHandler, useState } from 'react';
import { useAuth } from '../../common/context/AuthProvider';
import { FormHelper } from '../../common/helpers/FormHelper';
import { SignUpData } from '../../common/models/Auth';
import Input from '../../components/input/Input';

type Props = {
  binder: FormHelper<SignUpData>;
  state: SignUpData;
  handleNextStep: () => void;
};

let timer: any;

const SignUpEmailStep: React.FC<Props> = ({ binder, state, handleNextStep }) => {
  const { isSubmitting, signup, errors } = useAuth();
  const [isInputShown, setIsInputShown] = useState(false);

  const handleChange = () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      await signup(state);
      handleNextStep();
    }, 2000);
  };

  const showInput = () => {
    setIsInputShown(true);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} onAnimationComplete={showInput}>
      <motion.p layoutId='label-email'>First we need your email address :)</motion.p>
      {isInputShown && (
        <motion.div layoutId='email' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
          <Input type='email' name='email' placeholder='Email address' onChange={binder.bindText('email')} onKeyUp={handleChange} isLoading={isSubmitting} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default SignUpEmailStep;
