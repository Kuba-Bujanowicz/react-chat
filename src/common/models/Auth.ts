import { User } from './User';

export interface SignUpData {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface AuthErrors {
  email?: string;
  name?: string;
  password?: string;
  passwordConfirm?: string;
  global?: string;
}

export interface Auth {
  isAuthenticating: boolean;
  isAuthenticated: boolean;
  isSubmitting: boolean;
  errors: AuthErrors;
  signup: (credentials: SignUpData) => Promise<void>;
  signin: (credentials: SignInData) => Promise<void>;
  logout: () => Promise<void>;
}
