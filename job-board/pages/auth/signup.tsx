import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://job-board-platform.onrender.com/api/auth/signup/", {
        username,
        email,
        password,
        phone
      });

      // Store tokens on successful registration
      const { access_token, refresh_token } = response.data;
      console.log("Access Token:", access_token);
      console.log("Refresh Token:", refresh_token);
      Cookies.set("accessToken", access_token, { expires: 1, secure: true });
      Cookies.set("refreshToken", refresh_token, { expires: 7, secure: true });

      router.push("/jobs/all_jobs");
    } catch (error: any) {
      setError(error.response?.data?.error || "Error during sign up.");

    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border p-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2"
        />
        <input type="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Sign Up
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Signup;
