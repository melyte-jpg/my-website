import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DestinationDetails() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  // booking state
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/destinations/${id}`)
      .then((res) => res.json())
      .then((data) => setDestination(data))
      .catch((err) => console.log(err));
  }, [id]);

  // BOOKING FUNCTION
  const handleBooking = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1, // temporary (we don’t have login yet)
          destinationId: id,
          date: date,
        }),
      });

      const data = await res.json();
      setMessage("🎉 Booking successful!");
      console.log(data);
    } catch (err) {
      console.log(err);
      setMessage(" Booking failed");
    }
  };

  if (!destination) {
    return <div className="text-white p-10 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-6 text-center">
        {destination.name}
      </h1>

      <div className="flex flex-col items-center">

        {/* IMAGE */}
        <img
          src={destination.image}
          alt={destination.name}
          className="w-96 h-96 object-contain mb-6"
        />

        {/* DESCRIPTION */}
        <p className="text-lg text-gray-300 max-w-2xl text-center mb-4">
          {destination.longDescription}
        </p>

        <p className="text-green-400 text-2xl font-bold mb-6">
           Price: ${destination.price}
        </p>

        {/* BOOKING FORM */}
        <div className="bg-white/10 p-6 rounded-lg w-80 text-center">

          <h2 className="text-xl font-bold mb-3">Book This Trip </h2>

          <input
            type="date"
            className="w-full p-2 mb-3 text-black rounded"
            onChange={(e) => setDate(e.target.value)}
          />

          <button
            onClick={handleBooking}
            className="bg-indigo-600 hover:bg-indigo-700 w-full py-2 rounded font-semibold"
          >
            Book Now
          </button>

          {/* MESSAGE */}
          {message && (
            <p className="mt-3 text-green-400">{message}</p>
          )}

        </div>

      </div>
    </div>
  );
}
