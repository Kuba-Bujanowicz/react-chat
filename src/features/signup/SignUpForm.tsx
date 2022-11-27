import { useState } from 'react';
import { FormHelper } from '../../common/helpers/FormHelper';

interface SignUpData {
  email: string;
  name: string;
}

interface Errors {
  email: string;
  name: string;
}

const SignUpForm = () => {
  const [errors, setErrors] = useState<Errors>({
    email: '',
    name: '',
  });
  const [state, setState] = useState<SignUpData>({
    email: '',
    name: '',
  });
  const binder = new FormHelper<SignUpData, Errors>(state, setState, setErrors);
  return (
    <form onSubmit={binder.bindSubmit('/signup')}>
      <div>
        <input type='email' name='email' placeholder='Email address' onChange={binder.bindText('email')} />
        <div>{errors.email || ''}</div>
      </div>
      <div>
        <input type='text' name='name' placeholder='Name' onChange={binder.bindText('name')} />
        <div>{errors.name || ''}</div>
      </div>
      <input type='submit' value='Zarejestruj' />
    </form>
  );
};

export default SignUpForm;
