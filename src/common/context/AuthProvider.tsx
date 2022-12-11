import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { Auth, AuthErrors, SignInData, SignUpData } from '../models/Auth';
import { authLogout, authSignIn, authSignUp, checkAuth } from '../services/auth';

const AuthContext = createContext<Auth>({} as Auth);
export const useAuth = () => React.useContext(AuthContext);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
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
    setIsAuthenticating(true);
    return authSignUp(credentials)
      .then(() => setIsAuthenticated(true))
      .catch((error) => setErrors(error.response.data))
      .finally(() => setIsAuthenticating(false));
  };

  const signin = async (credentials: SignInData) => {
    setIsAuthenticating(true);
    return authSignIn(credentials)
      .then(() => setIsAuthenticated(true))
      .catch((error) => setErrors(error.response.data))
      .finally(() => setIsAuthenticating(false));
  };

  const logout = async () => {
    setIsAuthenticating(true);
    return authLogout()
      .then(() => setIsAuthenticated(false))
      .finally(() => setIsAuthenticating(false));
  };

  const auth: Auth = {
    errors,
    isAuthenticating,
    isAuthenticated,
    signup,
    signin,
    logout,
  };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
