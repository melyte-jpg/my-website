import { NavLink } from "react-router-dom";
import { destinations } from "../data/destinations";

export default function Home() {
  return (
   
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
         
    
      <div className="h-[70vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold text-gray-800">
          Explore the Universe With Us
        </h1>

        <p className="text-gray-600 max-w-xl mt-4">
          Discover amazing destinations, book your trips, and create unforgettable memories with our tourism platform.
        </p>

        
      </div>

      
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-6">
          Featured Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={place.image}
                alt={place.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-bold">
                  {place.name}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {place.description.slice(0, 80)}...
                </p>

                <p className="mt-2 font-semibold text-blue-600">
                  {place.price}
                </p>

                <NavLink
                  to={`/destination/${place.id}`}
                  className="inline-block mt-3 text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Details
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 shadow rounded-xl text-center">
            <h3 className="font-bold text-lg">Best Prices</h3>
            <p className="text-gray-600 mt-2">
              We offer the most affordable travel packages.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl text-center">
            <h3 className="font-bold text-lg">Easy Booking</h3>
            <p className="text-gray-600 mt-2">
              Book your trips quickly and easily.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl text-center">
            <h3 className="font-bold text-lg">Trusted Service</h3>
            <p className="text-gray-600 mt-2">
              Thousands of happy travelers trust us.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
