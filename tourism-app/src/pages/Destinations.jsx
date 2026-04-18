import { destinations } from "../data/destinations";

export default function Destinations() {
  return (
    <div className="pt-24 px-8">
      <h1 className="text-3xl font-bold mb-6">
        Destinations
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {destinations.map((place) => (
          <div
            key={place.id}
            className="bg-white shadow rounded-xl p-4"
          >
            <img
              src={place.image}
              alt={place.name}
              className="h-40 w-full object-cover rounded"
            />

            <h2 className="text-xl font-bold mt-2">
              {place.name}
            </h2>

            <p className="text-gray-600 text-sm">
              {place.description}
            </p>

            <p className="font-bold text-blue-600 mt-2">
              {place.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
