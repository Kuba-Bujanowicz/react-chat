import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';
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
  const { getCurrentUser, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(state.email, state.name);
    await getCurrentUser();
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
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
