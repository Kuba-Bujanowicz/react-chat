import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { Auth, AuthErrors, SignInData, SignUpData } from '../models/Auth';
import { authLogout, authSignIn, authSignUp, checkAuth } from '../services/auth';

const AuthContext = createContext<Auth>({} as Auth);
export const useAuth = () => React.useContext(AuthContext);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<AuthErrors>({} as AuthErrors);

  useEffect(() => {
    verifyAuth();
  }, []);

  const verifyAuth = async () => {
    setIsAuthenticating(true);
    return checkAuth()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setIsAuthenticating(false));
  };

  const signup = async (credentials: SignUpData) => {
    setIsSubmitting(true);
    return authSignUp(credentials)
      .then(() => setIsAuthenticated(true))
      .catch((error) => setErrors(error.response.data))
      .finally(() => setIsSubmitting(false));
  };

  const signin = async (credentials: SignInData) => {
    setIsSubmitting(true);
    return authSignIn(credentials)
      .then(() => setIsAuthenticated(true))
      .catch((error) => setErrors(error.response.data))
      .finally(() => setIsSubmitting(false));
  };

  const logout = async () => {
    setIsSubmitting(true);
    return authLogout()
      .then(() => setIsAuthenticated(false))
      .finally(() => setIsSubmitting(false));
  };

  const auth: Auth = {
    errors,
    isAuthenticating,
    isAuthenticated,
    isSubmitting,
    signup,
    signin,
    logout,
  };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
