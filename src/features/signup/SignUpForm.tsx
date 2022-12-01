import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';
import { FormHelper } from '../../common/helpers/FormHelper';

interface SignUpData {
  email: string;
  name: string;
}

const SignUpForm = () => {
  const [state, setState] = useState<SignUpData>({} as SignUpData);
  const binder = new FormHelper<SignUpData>(setState);
  const { signup, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    await signup(state.email, state.name);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      {isLoading ? <div>Loading...</div> : null}

      <div>
        <input type='email' name='email' placeholder='Email address' onChange={binder.bindText('email')} />
        {/* <div>{errors.email || ''}</div> */}
      </div>
      <div>
        <input type='text' name='name' placeholder='Name' onChange={binder.bindText('name')} />
        {/* <div>{errors.name || ''}</div> */}
      </div>
      <input type='submit' value='Zarejestruj' />
    </form>
  );
};

export default SignUpForm;
