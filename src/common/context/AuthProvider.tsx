import { createContext, useContext, useState } from 'react';
import { Api } from '../base/Api';
import { Auth } from '../models/Auth';
import { User } from '../models/User';

const AuthContext = createContext<Auth>({} as Auth);
export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const signup = async (email: string, name: string) => {
    try {
      await Api.post('/signup', { email, name });
    } catch (error) {
      setError('Wrong email or name');
    }
  };

  const signin = async (email: string) => {
    try {
      await Api.post('/signin', { email });
    } catch (error) {
      setError('Wrong credentials');
    }
  };

  const logout = async () => {
    try {
      await Api.post('/logout');
    } catch (error) {
      setError('Cannot logout');
    }
  };

  const authToken = async () => {
    try {
      await Api.post('/authToken');
      setIsAuthenticated(true);
    } catch (error) {
      setError('Unauthorized token');
      setIsAuthenticated(false);
    }
  };

  const data = {
    signup,
    signin,
    logout,
    authToken,
    isAuthenticated,
    error,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
