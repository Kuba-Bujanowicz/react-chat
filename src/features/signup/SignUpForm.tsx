import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';
import { FormHelper } from '../../common/helpers/FormHelper';
import { SignUpData } from '../../common/models/Auth';

const SignUpForm = () => {
  const [state, setState] = useState<SignUpData>({} as SignUpData);
  const { signup, isLoading, isAuthenticated, errors } = useAuth();
  const binder = new FormHelper<SignUpData>(setState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isLoading]);

  return (
    <form onSubmit={binder.bindSubmit(signup)}>
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
      <input type='submit' value={isLoading ? 'Signing up' : 'Sign Up'} disabled={isLoading} />
    </form>
  );
};

export default SignUpForm;
