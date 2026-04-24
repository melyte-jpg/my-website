import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/destinations")
      .then((res) => res.json())
      .then((data) => {
        console.log("DESTINATIONS:", data);
        setDestinations(data);
      })
      .catch((err) => console.log("ERROR:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-black text-white p-8">

      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-center mb-10">
         Explore Space Destinations
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
          >

            {/* IMAGE (FIXED - NO CUTTING) */}
            <div className="w-full h-56 flex items-center justify-center bg-black">
              <img
                src={dest.image}
                alt={dest.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <h2 className="text-2xl font-bold mb-1">
                {dest.name}
              </h2>

              <p className="text-gray-300 text-sm mb-3">
                {dest.shortDescription}
              </p>

              <p className="text-green-400 font-semibold mb-4">
                 Price: ${dest.price}
              </p>

              <Link
                to={`/destination/${dest.id}`}
                className="block text-center bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 rounded-lg font-semibold"
              >
                View Details
              </Link>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
