import { useState } from "react";


export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // REGISTER FUNCTION
  const handleRegister = async () => {
    setError("");
    setMessage("");

    // ✅ basic validation (important)
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // ✅ safer JSON parsing (prevents crash if backend returns HTML)
      let data;
      try {
        data = await res.json();
      } catch (err) {
        throw new Error("Invalid server response (not JSON)");
      }

      if (!res.ok) {
        setError(data.error || data.message || "Registration failed");
        return;
      }

      setMessage("🎉 Registration successful!");
      setForm({ name: "", email: "", password: "" });

      console.log("SERVER RESPONSE:", data);

    } catch (err) {
      console.log(err);
      setError(err.message || "Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white">

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl w-80 shadow-lg border border-white/20">

        <h1 className="text-2xl mb-4 text-center">Register</h1>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-400 mb-3 text-sm">{error}</p>
        )}

        {/* SUCCESS MESSAGE */}
        {message && (
          <p className="text-green-400 mb-3 text-sm">{message}</p>
        )}

        {/* INPUTS */}
        <input
          name="name"
          value={form.name}
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 mb-2 rounded bg-white text-black"
        />

        <input
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 mb-2 rounded bg-white text-black"
        />

        <input
          name="password"
          value={form.password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-white text-black"
        />

        {/* BUTTON */}
        <button
          onClick={handleRegister}
          className="bg-purple-600 hover:bg-purple-700 w-full py-2 rounded"
        >
          Register
        </button>

      </div>

    </div>
  );
}
