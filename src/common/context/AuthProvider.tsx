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
      console.log('fetching');
      const response = await Api.get('/currentUser');
      console.log(response);
    } catch (error: any) {
      console.log(error.response.data);
      setError('Cannot get user');
    }
  };

  const data = {
    getCurrentUser,
    user,
    error,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
