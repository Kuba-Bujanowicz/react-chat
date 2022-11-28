import { User } from './User';

export interface Auth {
  user: User | null;
  error: string;
  getCurrentUser: () => void;
}
