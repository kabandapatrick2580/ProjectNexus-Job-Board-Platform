import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";

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
    <div className="form-container">
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleLogin} >
      <h2 className="">Login</h2>

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input-box" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input-box" required />

        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
