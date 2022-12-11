import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';
import { useUser } from '../../common/context/UserProvider';
import { FormHelper } from '../../common/helpers/FormHelper';
import { SignInData } from '../../common/models/Auth';

const SignInForm = () => {
  const [state, setState] = useState<SignInData>({} as SignInData);
  const { signin, isAuthenticating, errors } = useAuth();
  const binder = new FormHelper<SignInData>(setState);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await signin(state);
    setTimeout(() => navigate('/'), 0);
  };

  return (
    <form onSubmit={binder.bindSubmit(handleSubmit)}>
      <div>{errors.global}</div>
      <div>
        <input type='email' name='email' placeholder='Email address' onChange={binder.bindText('email')} />
        <div>{errors.email}</div>
      </div>
      <div>
        <input type='password' name='password' placeholder='Password' onChange={binder.bindText('password')} />
        <div>{errors.password}</div>
      </div>
      <input type='submit' value={isAuthenticating ? 'Signing in...' : 'Sign In'} disabled={isAuthenticating} />
    </form>
  );
};

export default SignInForm;
