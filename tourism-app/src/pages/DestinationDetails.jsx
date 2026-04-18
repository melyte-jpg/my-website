import { useParams } from "react-router-dom";
import { destinations } from "../data/destinations";

export default function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return <p className="p-10">Destination not found</p>;
  }

  return (
    <div className="pt-24 px-8 py-10 bg-gray-50 min-h-screen">
      <img
        src={destination.image}
        className="w-full h-80 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-4">
        {destination.name}
      </h1>

      <p className="mt-3 text-gray-600">
        {destination.description}
      </p>

      <p className="mt-3 text-blue-600 font-bold">
        {destination.price}
      </p>
    </div>
  );
}
