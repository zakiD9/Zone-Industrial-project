
export type User = {
  id: number;
  fullName: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
};

export type LoginResponse = {
  user: User;
  token: string;
};
