import { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  // LOAD DESTINATIONS
  useEffect(() => {
    fetch("http://localhost:5000/api/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.log(err));
  }, []);

  // LOAD FAVORITES
  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:5000/api/favorites/${user.id}`)
      .then((res) => res.json())
      .then((data) => setFavorites(data))
      .catch((err) => console.log(err));
  }, []);

  // CHECK FAVORITE
  const isFavorite = (destinationId) => {
    return favorites.some(
      (f) => f.destinationId === destinationId
    );
  };

  // TOGGLE FAVORITE
  const toggleFavorite = async (destinationId) => {
    if (!user) {
      alert("Please login first");
      return;
    }

    const exists = isFavorite(destinationId);

    if (exists) {
      const fav = favorites.find(
        (f) => f.destinationId === destinationId
      );

      await fetch(
        `http://localhost:5000/api/favorites/${fav.id}`,
        {
          method: "DELETE",
        }
      );

      setFavorites(
        favorites.filter((f) => f.id !== fav.id)
      );
    } else {
      const res = await fetch(
        "http://localhost:5000/api/favorites",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user.id,
            destinationId,
          }),
        }
      );

      const data = await res.json();
      setFavorites([...favorites, data]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white pt-20 p-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        Space Destinations
      </h1>

      {/* GRID */}
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
