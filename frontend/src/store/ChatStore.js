import { create } from "zustand";
import axiosInstance from "../lib/axiosInstance";
import { useAuthStore } from "./AuthStore";

export const useChatStore = create((set) => ({
  selectedUser: {},
  sideBarUsers: [],
  messages: [],
  getSideBarUsers: async () => {
    const users = await axiosInstance.get("auth/getusers");
    // console.log("Fetched users:", users.data);
    set({ sideBarUsers: users.data });
  },
  setSelectedUser: (id, name) => {
    set({ selectedUser: { id, name } });
  },
  fetchMessages: async (userId) => {
    console.log(userId);
    const response = await axiosInstance.get(`chat/${userId}`);
    console.log(response.data);
    set({ messages: response.data.messages });
  },
  sendMessages: async (sendTo, message) => {
    const response = await axiosInstance.post(`chat/${sendTo}`, { message });
  },
  addSocketMessage: () => {
    const socket = useAuthStore.getState().socket;
    if (socket) {
      socket.on("message", (message) => {
        console.log("Message received", message);
        set({ messages: [...get().messages, message] });
      });
    } else {
      console.error("Socket is not connected");
    }
  },
}));
