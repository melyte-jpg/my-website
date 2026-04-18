import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="transition duration-300
fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-md text-white shadow-md z-50">
      
      <div className="flex justify-between items-center px-8 py-4">

     
        <h1 className="text-2xl font-bold text-blue-400">
          TravelGo 
        </h1>

       
        <div className="flex gap-3 flex-wrap">

          <NavLink
            to="/"
            className="transition duration-300 px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition text-sm"
          >
            Home
          </NavLink>

          <NavLink
            to="/destinations"
            className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition text-sm"
          >
            Destinations
          </NavLink>

          <NavLink
            to="/dashboard"
            className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition text-sm"
          >
           Dashboard
          </NavLink>

          <NavLink
            to="/login"
            className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-green-600 transition text-sm"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition text-sm"
          >
            Register
          </NavLink>

        </div>

      </div>

    </nav>
  );
}