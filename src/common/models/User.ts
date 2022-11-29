export interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
}

export interface UserContextData {
  user: User | null;
  fetchCurrentUser: () => void;
  error: string;
}
