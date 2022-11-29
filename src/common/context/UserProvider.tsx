import React, { createContext, useContext, useState } from 'react';
import { Api } from '../base/Api';
import { User, UserContextData } from '../models/User';

const UserContext = createContext<UserContextData>({} as UserContextData);
export const useUser = () => useContext(UserContext);

const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  const fetchCurrentUser = async () => {
    try {
      const response = (await Api.get('/currentUser')) as User;
      setUser(response);
    } catch (error) {
      setError('Cannot get user');
    }
  };

  const data = {
    user,
    error,
    fetchCurrentUser,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
