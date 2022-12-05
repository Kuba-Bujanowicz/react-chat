import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';
import { FormHelper } from '../../common/helpers/FormHelper';
import { SignInData } from '../../common/models/Auth';

const SignInForm = () => {
  const [state, setState] = useState<SignInData>({} as SignInData);
  const { signin, isLoading, isAuthenticated, isAuthenticating, errors } = useAuth();
  const binder = new FormHelper<SignInData>(setState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isLoading, isAuthenticating]);

  return (
    <form onSubmit={binder.bindSubmit(signin)}>
      <div>
        <input type='email' name='email' placeholder='Email address' onChange={binder.bindText('email')} />
        <div>{errors.email}</div>
      </div>
      <div>
        <input type='password' name='password' placeholder='Password' onChange={binder.bindText('password')} />
        <div>{errors.password}</div>
      </div>
      <input type='submit' value={isLoading ? 'Signing in...' : 'Sign In'} disabled={isLoading} />
    </form>
  );
};

export default SignInForm;
