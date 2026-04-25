import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-md text-white shadow-md z-50">

      <div className="flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold text-blue-400">
          TravelGo
        </h1>

        <div className="flex gap-3 flex-wrap">

          {[
            { path: "/", label: "Home" },
            { path: "/destinations", label: "Destinations" },
            { path: "/favorites", label: "Favorites" }, // ✅ FIXED
            { path: "/dashboard", label: "Dashboard" },
            { path: "/login", label: "Login" },
            { path: "/register", label: "Register" },
          ].map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition text-sm"
            >
              {item.label}
            </NavLink>
          ))}

        </div>

      </div>

    </nav>
  );
}
