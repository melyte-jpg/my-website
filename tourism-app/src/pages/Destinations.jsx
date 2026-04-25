import { useState, useEffect } from "react";
import DestinationCard from "../components/DestinationCard";

// ✅ STATIC DATA (no backend needed)
const mockDestinations = [
  {
    id: 1,
    name: "Moon Base Alpha",
    description: "First human colony on the Moon.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    price: 120000,
  },
  {
    id: 2,
    name: "Mars City",
    description: "Red planet exploration base.",
    image: "https://images.unsplash.com/photo-1580428180120-1c7f0f2f6b7f",
    price: 250000,
  },
  {
    id: 3,
    name: "Europa Station",
    description: "Ocean world exploration hub.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    price: 300000,
  },
];

export default function Destinations() {
  const [destinations] = useState(mockDestinations);
  const [favorites, setFavorites] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  // check favorite
  const isFavorite = (id) => favorites.includes(id);

  // toggle favorite (LOCAL ONLY)
  const toggleFavorite = (id) => {
    if (!user) {
      alert("Please login first");
      return;
    }

    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white pt-20 p-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        Space Destinations
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            item={dest}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        ))}

      </div>

    </div>
  );
}
