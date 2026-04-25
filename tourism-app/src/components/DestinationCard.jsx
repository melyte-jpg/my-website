import { useNavigate } from "react-router-dom";

export default function DestinationCard({
  item,
  isFavorite,
  toggleFavorite,
}) {
  const navigate = useNavigate();

  return (
    <div className="bg-white/10 border border-white/20 rounded-xl overflow-hidden shadow-lg text-white hover:scale-105 transition duration-300">

      {/* IMAGE FIX (NO CROPPING) */}
      <div className="w-full h-56 bg-black/30 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">

        <h2 className="text-xl font-bold mb-2">
          {item.name}
        </h2>

        <p className="text-gray-300 text-sm mb-3">
          {item.description}
        </p>

        <p className="text-green-400 font-bold mb-4">
          ${item.price}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-2">

          {/* VIEW BUTTON */}
          <button
            onClick={() => navigate(`/destination/${item.id}`)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
          >
            View
          </button>

          {/* FAVORITE BUTTON */}
          <button
            onClick={() => toggleFavorite(item.id)}
            className={`flex-1 py-2 rounded-lg transition ${
              isFavorite(item.id)
                ? "bg-red-600 hover:bg-red-700"
                : "bg-pink-600 hover:bg-pink-700"
            }`}
          >
            {isFavorite(item.id)
              ? " Remove"
              : " Favorite"}
          </button>

        </div>

      </div>

    </div>
  );
}
