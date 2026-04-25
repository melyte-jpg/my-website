import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  // ✅ get user INSIDE component (correct way)
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // scroll fix (navbar issue)
    window.scrollTo(0, 0);

    fetch(`http://localhost:5000/api/destinations/${id}`)
      .then((res) => res.json())
      .then((data) => setDestination(data))
      .catch((err) => console.log(err));
  }, [id]);

  // BOOKING FUNCTION
  const handleBooking = async () => {
    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    if (!date) {
      alert("Please select a date");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          destinationId: id,
          date: date,
        }),
      });

      const data = await res.json();

      setMessage("🎉 Booking successful!");
      console.log(data);
    } catch (err) {
      console.log(err);
      setMessage("❌ Booking failed");
    }
  };

  if (!destination) {
    return (
      <div className="text-white p-10 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white pt-20 p-6">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        {destination.name}
      </h1>

      {/* CARD */}
      <div className="flex flex-col items-center">

        {/* IMAGE */}
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full max-w-md h-80 object-cover rounded-xl shadow-lg mb-6"
        />

        {/* DESCRIPTION */}
        <p className="text-gray-300 max-w-2xl text-center mb-4">
          {destination.description}
        </p>

        {/* PRICE */}
        <p className="text-green-400 text-2xl font-bold mb-6">
           Price: ${destination.price}
        </p>

        {/* BOOKING BOX */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl w-80 border border-white/20">

          <h2 className="text-xl font-bold mb-3 text-center">
            Book This Trip
          </h2>

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
            <p className="mt-3 text-center text-green-400">
              {message}
            </p>
          )}

        </div>

      </div>
    </div>
  );
}
