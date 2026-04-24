import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-md text-white shadow-md z-50">

      <div className="flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold text-blue-400">
          TravelGo
        </h1>

        <div className="flex gap-3 flex-wrap">

          {["/", "/destinations", "/dashboard", "/login", "/register"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition text-sm"
            >
              {path === "/" && "Home"}
              {path === "/destinations" && "Destinations"}
              {path === "/dashboard" && "Dashboard"}
              {path === "/login" && "Login"}
              {path === "/register" && "Register"}
            </NavLink>
          ))}

        </div>

      </div>

    </nav>
  );
}
