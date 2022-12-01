import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';
import { FormHelper } from '../../common/helpers/FormHelper';

interface SignInData {
  email: string;
}

const SignInForm = () => {
  const [state, setState] = useState<SignInData>({} as SignInData);
  const binder = new FormHelper<SignInData>(setState);
  const { signin, isLoading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    await signin(state.email);
    setTimeout(() => navigate('/'), 0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type='email' name='email' placeholder='Email address' onChange={binder.bindText('email')} />
        {/* <div>{errors.email || ''}</div> */}
      </div>
      <input type='submit' value={isLoading ? 'Signing in...' : 'Sign In'} disabled={!!isLoading} />
    </form>
  );
};

export default SignInForm;
