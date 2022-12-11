import { motion } from 'framer-motion';
import { KeyboardEventHandler } from 'react';
import { useAuth } from '../../common/context/AuthProvider';
import { FormHelper } from '../../common/helpers/FormHelper';
import { SignUpData } from '../../common/models/Auth';
import Input from '../../components/input/Input';

type Props = {
  canMount: boolean;
  binder: FormHelper<SignUpData>;
  state: SignUpData;
  handleNextStep: () => void;
};

let timer: any;

const SignUpUsernameStep: React.FC<Props> = ({ canMount, binder, state, handleNextStep }) => {
  const { isSubmitting, signup, errors } = useAuth();

  const handleChange = () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      await signup(state);
      handleNextStep();
    }, 2000);
  };

  return canMount ? (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 2 }}>
      <div>
        <>
          <Input type='name' name='name' placeholder='Your name' onChange={binder.bindText('name')} onKeyUp={handleChange} isLoading={isSubmitting} />
          <div>{errors.name}</div>
        </>
      </div>
    </motion.div>
  ) : null;
};

export default SignUpUsernameStep;
