import { create } from "zustand";
import axiosInstance from "../lib/axiosInstance";
import { toast } from "react-toastify";
import { persist } from "zustand/middleware";
import io from "socket.io-client";

const BASE_URL = "http://localhost:3000";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      authUser: null,
      isCheckingAuth: true,
      isSigningUp: false,
      isLoging: false,
      loggedOut: false,
      users: null,
      socket: null,
      login: async (userData) => {
        try {
          const response = await axiosInstance.post("auth/login", userData, {
            withCredentials: true,
          });

          if (response.status === 200) {
            set({ authUser: response.data });
            toast.success(response.data.message);
            get().connectSocket();
            console.log("Connected");
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
          const response = await axiosInstance.post(
            "auth/logout",
            {},
            {
              withCredentials: true,
            }
          );

          if (response.status === 200) {
            set({ loggedOut: true });
            toast.success(response.data.message);
            get().disconnectSocket();
            console.log("Disconneted");
          }
        } catch (error) {
          console.log("error while logout", error);
          toast.error("Error while logout");
        }
      },
      connectSocket: () => {
        const { authUser } = get();
        if (!authUser || get().socket?.connected) {
          console.log("Socket already connected");
          return;
        }
        const socket = new io(BASE_URL);
        set({ socket });
      },
      disconnectSocket: () => {
        if (get().socket?.connected) {
          get().socket.disconnect();
        }
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
      partialize: (state) => ({ authUser: state.authUser }),
    }
  )
);
