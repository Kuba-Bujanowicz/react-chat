import { createContext, useContext, useEffect, useState } from 'react';
import { Auth } from '../models/Auth';
import { authLogout, authSignIn, authSignUp, verifyToken } from '../services/auth';

const AuthContext = createContext<Auth>({} as Auth);
export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const checkAuth = async () => {
    try {
      setIsAuthenticating(true);
      setIsLoading(true);
      await verifyToken();
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsAuthenticating(false);
      setIsLoading(false);
    }
  };

  const signup = async (email: string, name: string) => {
    try {
      setIsLoading(true);
      await authSignUp({ email, name });
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const signin = async (email: string) => {
    try {
      setIsLoading(true);
      await authSignIn({ email });
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);

      await authLogout();
    } finally {
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  };

  const data = {
    checkAuth,
    signup,
    signin,
    logout,
    isAuthenticated,
    isAuthenticating,
    isLoading,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
