export interface User {
  id: string;
  name: string;
  email: string;
  isVerified: boolean;
}

export interface UserContextData {
  user: User | null;
  error: string;
}
