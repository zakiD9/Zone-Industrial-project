
export type Request = {
   id: number;
   user_id: number;
   landSize: number;
   requestType: string;
   status: string;
   city: string;
   state: string;
   description: string;
   documents: string[];
};

export type RequestResponse = Request[];

export type updateRequestStatusResponse = {
   id: number;
   status: string;
};


// ------------------

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

export type LoginResponse = {
  user: User;
  token: string;
};
export type UserResponse = User[];
