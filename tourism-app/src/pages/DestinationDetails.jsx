import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  // -------------------------
  // LOAD DESTINATION
  // -------------------------
  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(`http://localhost:5000/api/destinations/${id}`)
      .then((res) => res.json())
      .then((data) => setDestination(data))
      .catch((err) => console.log("DETAIL ERROR:", err));
  }, [id]);

  // -------------------------
  // BOOKING
  // -------------------------
  const handleBooking = async () => {
    if (!user?.id) {
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
          date,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage("❌ Booking failed");
        return;
      }

      console.log(data);
      setMessage("🎉 Booking successful!");

      // reset date
      setDate("");
    } catch (err) {
      console.log("BOOKING ERROR:", err);
      setMessage("❌ Booking failed");
    }
  };

  // -------------------------
  // LOADING STATE
  // -------------------------
  if (!destination) {
    return (
      <div className="text-white p-10 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white pt-20 px-4 md:px-10">

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        {destination.name}
      </h1>

      {/* CONTENT */}
      <div className="flex flex-col items-center gap-6">

        {/* IMAGE */}
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full max-w-2xl h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />

        {/* DESCRIPTION */}
        <p className="text-gray-300 max-w-2xl text-center text-sm md:text-base">
          {destination.description}
        </p>

        {/* PRICE */}
        <p className="text-green-400 text-xl md:text-2xl font-bold">
          Price: ${destination.price}
        </p>

        {/* BOOKING BOX */}
        <div className="bg-white/10 backdrop-blur-md p-5 md:p-6 rounded-xl w-full max-w-sm border border-white/20">

          <h2 className="text-lg md:text-xl font-bold mb-3 text-center">
            Book This Trip
          </h2>

          <input
            type="date"
            value={date}
            className="w-full p-2 mb-3 text-black rounded"
            onChange={(e) => setDate(e.target.value)}
          />

          <button
            onClick={handleBooking}
            className="bg-indigo-600 hover:bg-indigo-700 w-full py-2 rounded font-semibold transition"
          >
            Book Now
          </button>

          {message && (
            <p className="mt-3 text-center text-green-400 text-sm">
              {message}
            </p>
          )}

        </div>

      </div>
    </div>
  );
}
