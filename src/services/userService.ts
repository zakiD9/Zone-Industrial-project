import type { LoginResponse } from "./types/auth";
import API from "./api";

export const loginAdmin = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await API.post<LoginResponse>("/users/login", { email, password });
  return response.data;
};
