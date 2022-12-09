import { useEffect, useState } from 'react';
import { Api } from '../../common/base/Api';

export const useEmail = () => {
  const [isEmailVerificationLoading, setIsEmailVerificationLoading] = useState(false);
  const [isEmailVerificationSent, setIsEmailVerificationSent] = useState(false);
  const [isEmailVerificationError, setIsEmailVerificationError] = useState(false);

  useEffect(() => {
    if (isEmailVerificationSent) {
      const timer = setTimeout(() => {
        setIsEmailVerificationSent(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isEmailVerificationSent]);

  const sendLink = async () => {
    setIsEmailVerificationLoading(true);
    setIsEmailVerificationError(false);
    try {
      await Api.post('/send-email');
      setIsEmailVerificationSent(true);
    } catch (error) {
      setIsEmailVerificationError(true);
    }
    setIsEmailVerificationLoading(false);
  };

  return {
    isEmailVerificationLoading,
    isEmailVerificationSent,
    isEmailVerificationError,
    sendLink,
  };
};
