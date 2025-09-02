import type { LoginResponse } from "./types/auth";
import API from "./api";
import type { UserResponse } from "./types/user";

export const loginAdmin = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await API.post<LoginResponse>("/users/login", { email, password });
  return response.data;
};

export const getAllUsers = async (): Promise<UserResponse> => {
  const response = await API.get<UserResponse>("/users");
  return response.data;
};

export const blockUser = async (id:number): Promise<string> => {
  const response = await API.patch<string>(`/users/users/${id}/block`);
  return response.data;
};

export const unblockUser = async (id:number): Promise<string> => {
  const response = await API.patch<string>(`/users/users/${id}/unblock`);
  return response.data;
};