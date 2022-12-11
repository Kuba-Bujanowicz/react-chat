import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';
import { useUser } from '../../common/context/UserProvider';
import { FormHelper } from '../../common/helpers/FormHelper';
import { SignUpData } from '../../common/models/Auth';

const SignUpForm = () => {
  const [state, setState] = useState<SignUpData>({} as SignUpData);
  const { signup, isSubmitting, errors } = useAuth();
  const { fetchUser } = useUser();
  const binder = new FormHelper<SignUpData>(setState);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await signup(state);
    if (Object.keys(errors).length !== 0) {
      return;
    }
    fetchUser();
    navigate('/verify-email');
  };

  return (
    <form onSubmit={binder.bindSubmit(handleSubmit)}>
      <div>{errors.global}</div>
      <div>
        <input type='email' name='email' placeholder='Email address' onChange={binder.bindText('email')} />
        <div>{errors.email}</div>
      </div>
      <div>
        <input type='text' name='name' placeholder='Name' onChange={binder.bindText('name')} />
        <div>{errors.name}</div>
      </div>
      <div>
        <input type='password' name='password' placeholder='Password' onChange={binder.bindText('password')} />
        <div>{errors.password}</div>
      </div>
      <div>
        <input type='password' name='passwordConfirm' placeholder='Confirm your password' onChange={binder.bindText('passwordConfirm')} />
        <div>{errors.passwordConfirm}</div>
      </div>
      <input type='submit' value={isSubmitting ? 'Signing up' : 'Sign Up'} disabled={isSubmitting} />
    </form>
  );
};

export default SignUpForm;
