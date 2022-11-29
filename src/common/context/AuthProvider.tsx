import { createContext, useContext, useState } from 'react';
import { Api } from '../base/Api';
import { Auth } from '../models/Auth';
import { User } from '../models/User';

const AuthContext = createContext<Auth>({} as Auth);
export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  const getCurrentUser = async () => {
    try {
      const response = (await Api.get('/currentUser')) as User;
      setUser(response);
    } catch (error: any) {
      setError('Cannot get user');
    }
  };

  const signup = async (email: string, name: string) => {
    try {
      await Api.post('/signup', { email, name });
    } catch (error: any) {
      setError('Wrong email or name');
    }
  };

  const signin = async (email: string) => {
    try {
      await Api.post('/signin', { email });
    } catch (error: any) {
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

  const data = {
    getCurrentUser,
    signup,
    signin,
    logout,
    user,
    error,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
