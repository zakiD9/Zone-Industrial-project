import { create } from "zustand";
import { getAllUsers, blockUser, unblockUser } from "../services/userService";

export type User = {
  id: number;
  fullName: string;
  email: string;
  role: string;
  password?: string;
  created_at?: string;
  updated_at?: string;
  is_blocked?: number;
};

type UserStore = {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;

  users: User[];
  fetchUsers: () => Promise<void>;
  block: (id: number) => Promise<void>;
  unblock: (id: number) => Promise<void>;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  token: null,
  login: (user, token) => set({ user, token }),
  logout: () => set({ user: null, token: null }),

  users: [],

  fetchUsers: async () => {
    try {
      const users = await getAllUsers();
      set({ users: users.filter((u) => u.role === "client") });
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  },

  block: async (id: number) => {
    try {
      await blockUser(id);
      set((state) => ({
        users: state.users.map((u) =>
          u.id === id ? { ...u, is_blocked: 1 } : u
        ),
      }));
    } catch (err) {
      console.error("Block failed:", err);
    }
  },

  unblock: async (id: number) => {
    try {
      await unblockUser(id);
      set((state) => ({
        users: state.users.map((u) =>
          u.id === id ? { ...u, is_blocked: 0 } : u
        ),
      }));
    } catch (err) {
      console.error("Unblock failed:", err);
    }
  },
}));
