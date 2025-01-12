import { create } from "zustand";
// import axiosInstance from "../lib/axiosInstance";
import { toast } from "react-toastify";
import axios from "axios";

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isLoging: false,
  loggedOut: false,

  login: async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        userData,
        { withCredentials: true }
      );
      set({ authUser: response.data });
      if (response.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login Failed in catch");
    }
  },
  logout: async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        set({ loggedOut: true });
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log("error while logout", error);
      toast.error("Error while logout");
    }
  },
}));
