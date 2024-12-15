import { create } from "zustand";
import axiosInstance from "../lib/axiosInstance";
import { toast } from "react-toastify";

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isLoging: false,

  login: async (userData) => {
    try {
      const response = await axiosInstance.post("auth/login", userData);
      set({ authUser: response.data });
      if (response.status === 200) {
        toast.success("Logged in successfully");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  },
}));
