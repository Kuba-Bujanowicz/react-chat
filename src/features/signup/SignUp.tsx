import SignUpEmailStep from './SignUpEmailStep';
import SignUpForm from './SignUpForm';
import { FormHelper } from '../../common/helpers/FormHelper';
import { SignUpData } from '../../common/models/Auth';
import { useState } from 'react';
import SignUpUsernameStep from './SignUpUsernameStep';

const SignUp = () => {
  const [state, setState] = useState<SignUpData>({} as SignUpData);
  const binder = new FormHelper<SignUpData>(setState);
  const [step, setStep] = useState(0);

  return (
    <main className='signup'>
      <h1 className='signup__title'>Signup</h1>
      <div className='signup__form box'>
        {/* <SignUpForm /> */}
        <SignUpEmailStep binder={binder} canMount={step >= 0} state={state} handleNextStep={setStep.bind(this, (prevState) => prevState + 1)} />
        <SignUpUsernameStep binder={binder} canMount={step >= 1} state={state} handleNextStep={setStep.bind(this, (prevState) => prevState + 1)} />
      </div>
      <a href='/signin'>Already signed up?</a>
    </main>
  );
};

export default SignUp;
