import { useEffect } from 'react';
import { useAuth } from '../../common/context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useEmail } from './useEmail';

const EmailVerification = () => {
  const { sendLink, isEmailVerificationSent, isEmailVerificationLoading } = useEmail();
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/signin');
    }
  }, [isLoading]);

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
