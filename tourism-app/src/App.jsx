import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Destinations from "./pages/Destinations"
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Register from "./pages/Register.jsx";
import DestinationDetails from "./pages/DestinationDetails.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;