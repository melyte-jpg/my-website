import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // -------------------------
  // LOAD FAVORITES
  // -------------------------
  useEffect(() => {
    if (!user?.id) return;

    fetch(`http://localhost:5000/api/favorites/${user.id}`)
      .then((res) => res.json())
      .then((data) => setFavorites(data || []))
      .catch((err) => console.log("FAVORITES ERROR:", err));
  }, [user?.id]);

  // -------------------------
  // REMOVE FAVORITE
  // -------------------------
  const removeFavorite = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/favorites/${id}`, {
        method: "DELETE",
      });

      setFavorites((prev) => prev.filter((f) => f.id !== id));
    } catch (err) {
      console.log("DELETE ERROR:", err);
    }
  };

  // -------------------------
  // NOT LOGGED IN
  // -------------------------
  if (!user) {
    return (
      <div className="text-white text-center mt-20">
        Please login first
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white pt-20 p-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        ❤️ My Favorites
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-400">
          No favorites yet
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">

          {favorites.map((fav) => {
            const dest = fav?.Destination;

            if (!dest) return null;

            return (
              <div
                key={fav.id}
                className="bg-white/10 border border-white/20 rounded-xl overflow-hidden shadow-lg"
              >

                {/* IMAGE */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-48 object-cover"
                />

                {/* CONTENT */}
                <div className="p-4">

                  <h2 className="text-xl font-bold mb-2">
                    {dest.name}
                  </h2>

                  <p className="text-gray-300 text-sm mb-3">
                    {dest.description}
                  </p>

                  <p className="text-green-400 font-bold mb-4">
                    ${dest.price}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex gap-2">

                    <button
                      onClick={() =>
                        navigate(`/destination/${dest.id}`)
                      }
                      className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
                    >
                      View
                    </button>

                    <button
                      onClick={() => removeFavorite(fav.id)}
                      className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded-lg"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}
