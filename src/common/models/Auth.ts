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
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  isLoading: boolean;
  errors: AuthErrors;
  signup: (credentials: SignUpData) => Promise<void>;
  signin: (credentials: SignInData) => Promise<void>;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
}
