import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Api } from '../base/Api';
import { Auth, SignInData, SignUpData } from '../models/Auth';
import { User } from '../models/User';
import { authLogout, authSignIn, authSignUp } from '../services/auth';

const AuthContext = createContext<Auth>({} as Auth);
export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    setIsLoading(true);
    return Api.get('/current-user')
      .then((response) => setUser(response))
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false));
  };

  const signin = (credentials: SignInData) => {
    setIsLoading(true);
    return authSignIn(credentials)
      .then((response) => setUser(response))
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false));
  };
  const signup = (credentials: SignUpData) => {
    setIsLoading(true);
    return authSignUp(credentials)
      .then((response) => setUser(response))
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false));
  };
  const logout = () => {
    setIsLoading(true);
    return authLogout()
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false));
  };

  const auth: Auth = {
    user,
    isLoading,
    signin,
    signup,
    logout,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
