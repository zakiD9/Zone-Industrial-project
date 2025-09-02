import { create } from "zustand";
import { sendNotification } from "../services/notificationService";

type NotificationStoreType = {
  sending: boolean;
  error: string | null;
  send: (userId: number, message: string) => Promise<void>;
};

export const useNotificationStore = create<NotificationStoreType>((set) => ({
  sending: false,
  error: null,

  send: async (userId, message) => {
    set({ sending: true, error: null });
    try {
      await sendNotification(userId, message);
      set({ sending: false });
    } catch (err: any) {
      set({ sending: false, error: err.message || "Failed to send notification" });
      console.error("Notification error:", err);
    }
  },
}));
