import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://job-board-platform.onrender.com/api/auth/login/", {
        email,
        password,
      });
  
      console.log("Full API response:", response.data); // Log entire response
  
      const { access_token, refresh_token } = response.data; // Extract tokens
      console.log("Access Token:", access_token);
      console.log("Refresh Token:", refresh_token);
  
      if (!access_token || !refresh_token) {
        throw new Error("Tokens not received from API");
      }
  
      // Store tokens in cookies
      Cookies.set("accessToken", access_token, { expires: 0.1 });
      Cookies.set("refreshToken", refresh_token, { expires: 0.7 });
  
      router.push("/jobs/all_jobs");
    } catch (error: any) {
      console.error("Login error:", error.response?.data || error.message);
      setError(error.response?.data?.detail || "Invalid credentials");
    }
  };
  

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border rounded" required />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
