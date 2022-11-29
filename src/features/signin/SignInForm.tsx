import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';
import { FormHelper } from '../../common/helpers/FormHelper';

interface SignInData {
  email: string;
}

interface Errors {
  email: string;
}

const SignInForm = () => {
  const [errors, setErrors] = useState<Errors>({
    email: '',
  });
  const [state, setState] = useState<SignInData>({
    email: '',
  });
  const binder = new FormHelper<SignInData, Errors>(state, setState, setErrors);
  const { getCurrentUser, signin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await signin(state.email);
    await getCurrentUser();
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type='email' name='email' placeholder='Email address' onChange={binder.bindText('email')} />
        <div>{errors.email || ''}</div>
      </div>
      <input type='submit' value='Zaloguj' />
    </form>
  );
};

export default SignInForm;
