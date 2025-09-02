import { create } from "zustand";
import { getAllRequests, getRequestsByStatus, updateRequestStatus } from "../services/requestService";

export type Request = {
  id: number;
  user_id: number;
  landSize: number;
  requestType: string;
  status: "pending" | "accepted" | "rejected" | "canceled";
  city: string;
  state: string;
  description: string;
  documents: string[];
};

type RequestStoreType = {
  requests: Request[];
  fetchRequests: () => Promise<void>;
  filterRequests: (status: string) => Promise<void>;
  updateRequest: (id: number, status: "accepted" | "rejected") => Promise<void>;
};

export const useRequestStore = create<RequestStoreType>((set, get) => ({
  requests: [],

  fetchRequests: async () => {
    try {
      const data = await getAllRequests();
      set({ requests: data });
    } catch (err) {
      console.error("Error fetching requests:", err);
    }
  },


  filterRequests: async (status: string) => {
    try {
      const apiStatus = status.toLowerCase() === "all" ? "" : status.toLowerCase();
      const data = apiStatus ? await getRequestsByStatus(apiStatus) : await getAllRequests();
      set({ requests: data });
    } catch (err) {
      console.error("Failed to filter requests:", err);
    }
  },

  updateRequest: async (id: number, status: "accepted" | "rejected") => {
    try {
      await updateRequestStatus(id, status);
      set((state) => ({
        requests: state.requests.map((req) =>
          req.id === id ? { ...req, status, updatedAt: new Date().toISOString() } : req
        ),
      }));
    } catch (err) {
      console.error("Failed to update request:", err);
    }
  },
}));
