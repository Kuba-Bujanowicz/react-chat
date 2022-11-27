import SignUpForm from './SignUpForm';

const SignUp = () => {
  return (
    <main className='signup'>
      <h1 className='signup__title'>Signup</h1>
      <div className='signup__form box'>
        <SignUpForm />
      </div>
    </main>
  );
};

export default SignUp;
