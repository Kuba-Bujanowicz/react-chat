import { createContext, useContext, useEffect, useState } from 'react';
import { Auth, AuthErrors, SignInData, SignUpData } from '../models/Auth';
import { authLogout, authSignIn, authSignUp, verifyToken } from '../services/auth';

const AuthContext = createContext<Auth>({} as Auth);
export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<AuthErrors>({});

  useEffect(() => {
    setIsAuthenticating(true);
    checkAuth();
  }, []);

  const handleReject = (errors: any) => {
    setIsAuthenticated(false);
    setErrors(errors.response.data);
    setIsLoading(false);
    setIsAuthenticating(false);
  };

  const handleResolve = () => {
    setIsAuthenticated(true);
    setIsAuthenticating(false);
    setIsLoading(false);
  };

  const checkAuth = () => {
    return verifyToken().then(handleResolve).catch(handleReject);
  };

  const signup = (credentials: SignUpData) => {
    setIsLoading(true);
    return authSignUp(credentials).then(handleResolve).catch(handleReject);
  };

  const signin = (credentials: SignInData) => {
    setIsLoading(true);
    return authSignIn(credentials).then(handleResolve).catch(handleReject);
  };

  const logout = () => {
    setIsLoading(true);
    return authLogout()
      .then(() => setIsAuthenticated(false))
      .catch(handleReject)
      .finally(() => setIsLoading(false));
  };

  const data = {
    checkAuth,
    signup,
    signin,
    logout,
    isAuthenticated,
    isAuthenticating,
    isLoading,
    errors,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
