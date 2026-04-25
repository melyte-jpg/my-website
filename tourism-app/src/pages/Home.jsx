import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white bg-black overflow-hidden">

      {/* HERO SECTION */}
      <div
        className="h-screen flex flex-col items-center justify-center text-center px-6 relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10">

          {/* BRAND NAME */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide">
            TRAZ <span className="text-indigo-400">Traveland</span>
          </h1>

          {/* TAGLINE */}
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            Explore the universe beyond imagination. Book interstellar journeys
            to planets, space stations, and futuristic colonies with TRAZ Traveland.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-center">

            <button
              onClick={() => navigate("/destinations")}
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg text-lg font-semibold"
            >
              Explore Universe
            </button>

            <button
              onClick={() => navigate("/register")}
              className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200"
            >
              Get Started
            </button>

          </div>

        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="py-20 px-6 bg-gradient-to-b from-black to-slate-900">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose TRAZ Traveland?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2"> Advanced Space Fleet</h3>
            <p className="text-gray-300 text-sm">
              Travel safely in ultra-modern spacecraft designed for deep space journeys.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2"> Exotic Destinations</h3>
            <p className="text-gray-300 text-sm">
              Visit Mars colonies, Neptune Deep Stations, and unknown galaxies.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1581822261290-991b38693d1b"
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2"> Instant Booking</h3>
            <p className="text-gray-300 text-sm">
              Book your space journey instantly with a smooth and modern system.
            </p>
          </div>

        </div>
      </div>

      {/* CTA SECTION */}
      <div className="text-center py-20 bg-black">

        <h2 className="text-3xl font-bold mb-4">
          Start Your Journey with TRAZ Traveland
        </h2>

        <p className="text-gray-400 mb-6">
          The universe is waiting for you.
        </p>

        <button
          onClick={() => navigate("/destinations")}
          className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg text-lg font-semibold"
        >
          Explore Now
        </button>

      </div>

    </div>
  );
}
