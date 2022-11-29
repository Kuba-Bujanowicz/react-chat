import SignInForm from './SignInForm';

const SignIn = () => {
  return (
    <main className='signin'>
      <h1 className='signin__title'>Sign In</h1>
      <div className='signin__form box'>
        <SignInForm />
      </div>
    </main>
  );
};

export default SignIn;
