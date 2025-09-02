import { create } from "zustand";
import { getAllRequests, getRequestsByStatus, updateRequestStatus } from "../services/requestService";

export type Request = {
  id: number;
  user_id: number;
  landSize: number;
  requestType: string;
  status: "pending" | "accepted" | "refused" | "canceled";
  city?: string;
  state?: string;
  description?: string;
  documents?: string[];
  createdAt?: string;
  updatedAt?: string;
};

type RequestStoreType = {
  requests: Request[];
  fetchRequests: () => Promise<void>;
  filterRequests: (search?: string, status?: string) => Promise<void>;
  updateRequest: (id: number, status: "accepted" | "refused") => Promise<void>;
};

export const useRequestStore = create<RequestStoreType>((set) => ({
  requests: [],

  fetchRequests: async () => {
    try {
      const data: Request[] = await getAllRequests();
      set({ requests: data });
    } catch (err) {
      console.error("Error fetching requests:", err);
    }
  },

  filterRequests: async (search = "", apiStatus = "All") => {
  try {
    const status = apiStatus.toLowerCase() === "all" ? "" : apiStatus.toLowerCase();
    console.log(status);
    const data: Request[] = status ? await getRequestsByStatus(status) : await getAllRequests();
    const filtered = search
      ? data.filter((r) => r.requestType.toLowerCase().includes(search.toLowerCase()))
      : data;
    set({ requests: filtered });
  } catch (err) {
    console.error("Failed to filter requests:", err);
  }
},


  updateRequest: async (id, status) => {
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
