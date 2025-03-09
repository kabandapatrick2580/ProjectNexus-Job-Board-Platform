import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const API_LOGOUT_URL = "https://job-board-platform.onrender.com/api/auth/logout/";

export const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    const refreshToken = Cookies.get("refreshToken");

    if (!refreshToken) {
      console.warn("No refresh token found. Logging out locally.");
      clearSession();
      return;
    }

    try {
      await axios.post(API_LOGOUT_URL, { refresh_token: refreshToken });
      console.log("User logged out from server successfully.");
    } catch (error: any) {
      console.error("Logout failed:", error.response?.data || error.message);
    }

    // Clear session regardless of API success or failure
    clearSession();
  };

  const clearSession = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    router.push("/auth/login"); // Redirect to login page
  };

  return logout;
};
