export type User = {
   id: number;
   email: string;
   fullName: string;
   password: string;
   role: string;
   created_at: string;
   updated_at: string;
   is_blocked: number;
};

export type UserResponse = User[];