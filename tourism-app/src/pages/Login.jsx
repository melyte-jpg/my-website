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

      // ✅ SAVE USER
   localStorage.setItem("user", JSON.stringify({
  id: data.user.id,
  name: data.user.name,
  email: data.user.email,
}));


      alert("Login successful!");
      navigate("/destinations");

    } catch (err) {
      console.log(err);
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-white/10 p-6 rounded-lg w-80">

        <h1 className="text-2xl mb-4 text-center">Login</h1>

        {/* ERROR MESSAGE */}
        {error && <p className="text-red-400 mb-2">{error}</p>}

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
          className="bg-purple-600 w-full py-2"
        >
          Login
        </button>

      </div>

    </div>
  );
}
