import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const linkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "bg-gray-800 hover:bg-blue-600"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-md text-white shadow-md z-50">

      <div className="flex justify-between items-center px-4 md:px-8 py-4">

        {/* LOGO */}
        <h1
          onClick={() => navigate("/")}
          className="text-xl md:text-2xl font-bold text-blue-400 cursor-pointer"
        >
          TRAZ Traveland
        </h1>

        {/* LINKS */}
        <div className="flex gap-2 md:gap-3 flex-wrap items-center">

          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/destinations" className={linkStyle}>
            Destinations
          </NavLink>

          <NavLink to="/favorites" className={linkStyle}>
            Favorites
          </NavLink>

          <NavLink to="/dashboard" className={linkStyle}>
            Dashboard
          </NavLink>

          {!user ? (
            <>
              <NavLink to="/login" className={linkStyle}>
                Login
              </NavLink>

              <NavLink to="/register" className={linkStyle}>
                Register
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm transition"
            >
              Logout
            </button>
          )}

        </div>

      </div>

    </nav>
  );
}
