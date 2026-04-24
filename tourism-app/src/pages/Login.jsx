import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login successful!");
        navigate("/destinations");
      } else {
        alert("Invalid login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-white/10 p-6 rounded-lg w-80">

        <h1 className="text-2xl mb-4 text-center">Login</h1>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 mb-2 text-black"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 mb-4 text-black"
        />

        <button
          onClick={handleLogin}
          className="bg-indigo-600 w-full py-2"
        >
          Login
        </button>

      </div>

    </div>
  );
}
