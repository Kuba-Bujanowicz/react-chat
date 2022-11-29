import { AxiosPromise } from 'axios';
import { User } from './User';

export interface Auth {
  error: string;
  isAuthenticated: boolean;
  signup: (email: string, name: string) => void;
  signin: (email: string) => void;
  logout: () => void;
  authToken: () => void;
}
