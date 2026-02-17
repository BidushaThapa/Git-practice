// import { useState } from "react";
// import axios from "axios";

// export default function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("farmer");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);

//     try {
//       // ✅ Use POST to send signup data
//       const res = await axios.post("https://unslatted-subovate-alberto.ngrok-free.dev", {
//         name,
//         email,
//         password,
//         role,
//       });

//       console.log("Response:", res.data);

//       setSuccess("Account created successfully!");
//       setName("");
//       setEmail("");
//       setPassword("");
//     } catch (err) {
//       console.error("Signup error:", err);
//       setError(
//         err.response?.data?.message || err.message || "Server connection failed"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-50">
//       <form
//         onSubmit={handleSignup}
//         className="bg-white p-6 rounded-lg shadow-md w-80"
//       >
//         <h2 className="text-2xl font-bold text-center mb-4 text-black">
//           Farmer Signup
//         </h2>

//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
//         {success && <p className="text-green-600 text-sm mb-2">{success}</p>}

//         <input
//           type="text"
//           placeholder="Full Name"
//           className="w-full p-2 mb-3 border text-black rounded"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-3 border text-black rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-3 border text-black rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full text-white py-2 rounded bg-green-600"
//         >
//           {loading ? "Creating..." : "Sign Up"}
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("farmer");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://unslatted-subovate-alberto.ngrok-free.dev/api/users",
        { name, email, password, role }
      );

      console.log("Response:", res.data);
      setSuccess("Account created successfully!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Signup error:", err);
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
        onSubmit={handleSignup}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-black">
          Farmer Signup
        </h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-2">{success}</p>}

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 mb-3 border text-black rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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
          className="w-full text-white py-2 rounded bg-green-600"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

