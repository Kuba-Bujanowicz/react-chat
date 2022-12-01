import { createContext, useContext, useEffect, useState } from 'react';
import { Auth } from '../models/Auth';
import { authLogout, authSignIn, authSignUp, verifyToken } from '../services/auth';

const AuthContext = createContext<Auth>({} as Auth);
export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    setIsLoading(true);
    return verifyToken()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setIsLoading(false));
  };

  const signup = (email: string, name: string) => {
    setIsLoading(true);
    return authSignUp({ email, name })
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setIsLoading(false));
  };

  const signin = (email: string) => {
    setIsLoading(true);
    return authSignIn({ email })
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setIsLoading(false));
  };

  const logout = () => {
    setIsLoading(true);
    return authLogout()
      .then(() => setIsAuthenticated(false))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setIsLoading(false));
  };

  const data = {
    checkAuth,
    signup,
    signin,
    logout,
    isAuthenticated,
    isLoading,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
