export interface Auth {
  isAuthenticated: boolean;
  isLoading: boolean;
  signup: (email: string, name: string) => Promise<void>;
  signin: (email: string) => Promise<void>;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
}
