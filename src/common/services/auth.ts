import { Api } from '../base/Api';
import { SignInData, SignUpData } from '../models/Auth';

export const authSignUp = (credentials: SignUpData) => {
  return Api.post('/signup', credentials);
};

export const authSignIn = (credentials: SignInData) => {
  return Api.post('/signin', credentials);
};

export const authLogout = () => {
  return Api.post('/logout');
};
