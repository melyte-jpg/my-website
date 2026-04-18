import { useNavigate } from "react-router-dom";

export default function DestinationCard({ item }) {
  const navigate = useNavigate();

  return (
    <div className="border rounded-xl overflow-hidden shadow-md">
      <img src={item.image} className="h-40 w-full object-cover" />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p className="text-gray-600">{item.description}</p>

        <button
          onClick={() => navigate(`/destination/${item.id}`)}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
        >
          View Details
        </button>
      </div>
    </div>
  );
}