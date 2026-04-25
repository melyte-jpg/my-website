import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
        })
      );

      alert("Login successful!");
      navigate("/destinations");

    } catch (err) {
      console.log(err);
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-slate-900 to-black text-white px-4">

      {/* LOGIN CARD */}
      <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl w-full max-w-sm border border-white/20 shadow-lg">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login to <span className="text-indigo-400">TRAZ Traveland</span>
        </h1>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* EMAIL */}
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 mb-3 rounded bg-white text-black outline-none"
        />

        {/* PASSWORD */}
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-white text-black outline-none"
        />

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded font-semibold transition"
        >
          Login
        </button>

        {/* FOOTER TEXT */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-indigo-400 cursor-pointer"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}
