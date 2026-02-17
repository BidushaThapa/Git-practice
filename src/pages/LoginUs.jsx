import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://unslatted-subovate-alberto.ngrok-free.dev/api/users/login", // <-- ngrok URL
        { email, password } // send credentials
      );

      console.log("Login successful:", res.data);

      // Save token and userId if backend sends it
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);

      // Optionally redirect
      // navigate("/dashboard");

    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || err.message || "Server connection failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-black">
          Farmer Login
        </h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border text-black rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border text-black rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full text-white py-2 rounded bg-amber-500"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
