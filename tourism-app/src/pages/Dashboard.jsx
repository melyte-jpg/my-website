import { useEffect, useState } from "react";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [bookings, setBookings] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // -------------------------
  // LOAD BOOKINGS
  // -------------------------
  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:5000/api/bookings/${user.id}`)

      .then((res) => res.json())
      .then((data) => {
        const userBookings = data.filter(
          (b) => b.userId === user.id
        );
        setBookings(userBookings);
      })
      .catch((err) => console.log(err));
  }, []);

  // -------------------------
  // LOAD FAVORITES
  // -------------------------
  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:5000/api/favorites/${user.id}`)
      .then((res) => res.json())
      .then((data) => setFavorites(data))
      .catch((err) => console.log(err));
  }, []);

  if (!user) {
    return (
      <div className="text-white p-10 text-center">
        Please login first
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white pt-20 p-6">

      {/* HEADER */}
      <h1 className="text-4xl font-bold text-center mb-8">
         Welcome, {user.name}
      </h1>

      {/* ---------------- BOOKINGS ---------------- */}
      <h2 className="text-2xl font-semibold mb-4">
         Your Bookings
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {bookings.length === 0 ? (
          <p className="text-gray-400">No bookings yet</p>
        ) : (
          bookings.map((b) => (
            <div
              key={b.id}
              className="bg-white/10 p-4 rounded-lg border border-white/20"
            >
              <h3 className="text-lg font-bold">
                {b.Destination?.name}
              </h3>

              <p className="text-gray-300 text-sm">
                 Date: {new Date(b.date).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>

      {/* ---------------- FAVORITES ---------------- */}
      <h2 className="text-2xl font-semibold mb-4">
         Your Favorites
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {favorites.length === 0 ? (
          <p className="text-gray-400">No favorites yet</p>
        ) : (
          favorites.map((f) => (
            <div
              key={f.id}
              className="bg-white/10 p-4 rounded-lg border border-white/20"
            >
              <h3 className="text-lg font-bold">
                {f.Destination?.name}
              </h3>

              <p className="text-gray-300 text-sm">
                {f.Destination?.description}
              </p>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
