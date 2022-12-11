import React, { PropsWithChildren, useEffect } from 'react';
import { Api } from '../base/Api';
import { User } from '../models/User';

interface UserContext {
  user: User | null;
  isLoading: boolean;
}

const UserContext = React.createContext<UserContext>({} as UserContext);
export const useUser = () => React.useContext(UserContext);

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    Api.get('/current-user')
      .then((data) => setUser(data))
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false));
  }, []);

  const data: UserContext = {
    user,
    isLoading,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
