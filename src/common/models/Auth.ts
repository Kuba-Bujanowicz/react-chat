import { User } from './User';

export interface Auth {
  user: User | null;
  error: string;
  getCurrentUser: () => void;
  signup: (email: string, name: string) => void;
  signin: (email: string) => void;
  logout: () => void;
}
