import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white">

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl w-80 shadow-lg border border-white/20">

        <h1 className="text-2xl mb-4 text-center">🚀 Register</h1>

        {error && (
          <p className="text-red-400 mb-3 text-sm">{error}</p>
        )}

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 mb-2 rounded bg-white text-black"
        />

        <input
          name="email"
          placeholder="Email (@gmail.com)"
          onChange={handleChange}
          className="w-full p-2 mb-2 rounded bg-white text-black"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-white text-black"
        />

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
