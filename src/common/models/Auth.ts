export interface Auth {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  isLoading: boolean;
  signup: (email: string, name: string) => void;
  signin: (email: string) => void;
  checkAuth: () => void;
  logout: () => void;
}
