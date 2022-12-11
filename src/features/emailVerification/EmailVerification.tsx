import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmail } from './useEmail';
import { useUser } from '../../common/context/UserProvider';

const EmailVerification = () => {
  const { sendLink, isEmailVerificationSent, isEmailVerificationLoading } = useEmail();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (user?.isVerified) {
        navigate('/');
      }
    }, 1000);
  }, []);

  return (
    user && (
      <div>
        Check your inbox: {user?.email}
        <br />
        Verified status: {user?.isVerified ? 'Verified' : 'Not verified'}
        <br />
        <button onClick={sendLink} disabled={isEmailVerificationSent}>
          {isEmailVerificationLoading ? 'Sending...' : isEmailVerificationSent ? 'Sent' : user.isVerified ? 'Verified' : 'Send verification link'}
        </button>
      </div>
    )
  );
};

export default EmailVerification;
