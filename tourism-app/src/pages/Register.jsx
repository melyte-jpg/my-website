import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setError("");
    setMessage("");

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

      let data;
      try {
        data = await res.json();
      } catch (err) {
        throw new Error("Invalid server response");
      }

      if (!res.ok) {
        setError(data.error || data.message || "Registration failed");
        return;
      }

      setMessage("🎉 Registration successful!");
      setForm({ name: "", email: "", password: "" });

    } catch (err) {
      console.log(err);
      setError(err.message || "Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white px-4">

      <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl w-full max-w-sm md:max-w-md shadow-lg border border-white/20">

        <h1 className="text-2xl mb-6 text-center">Register</h1>

        {error && (
          <p className="text-red-400 mb-3 text-sm text-center">{error}</p>
        )}

        {message && (
          <p className="text-green-400 mb-3 text-sm text-center">{message}</p>
        )}

        <input
          name="name"
          value={form.name}
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 mb-3 rounded bg-white text-black"
        />

        <input
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 mb-3 rounded bg-white text-black"
        />

        <input
          name="password"
          value={form.password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 mb-5 rounded bg-white text-black"
        />

        <button
          onClick={handleRegister}
          className="bg-purple-600 hover:bg-purple-700 w-full py-3 rounded font-semibold transition"
        >
          Register
        </button>

      </div>
    </div>
  );
}
