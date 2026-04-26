import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white bg-black overflow-hidden">

      {/* HERO */}
      <div
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3')", // deep space stars
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide">
            TRAZ <span className="text-indigo-400">Traveland</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Travel beyond galaxies, orbit alien planets, and explore deep space
            like never before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* FEATURES */}
      <div className="py-20 px-6 bg-gradient-to-b from-black to-slate-900">
        <h2 className="text-3xl font-bold text-center mb-12">
          Space Experiences
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              img: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031", // nebula
              title: "Nebula Exploration",
              desc: "Witness colorful cosmic clouds across galaxies."
            },
            {
              img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564", // planet
              title: "Alien Planets",
              desc: "Discover mysterious and beautiful planets."
            },
            {
              img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564", // galaxy
              title: "Galactic Travel",
              desc: "Travel across distant galaxies in comfort."
            },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-xl border border-white/20 hover:scale-105 transition">
              <img
                src={item.img}
                className="h-40 w-full object-cover rounded-lg mb-4"
                alt="space"
              />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SPACE GALLERY */}
      <div className="py-20 px-6 bg-black">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Universe Awaits
        </h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[
            "https://images.unsplash.com/photo-1450849608880-6f787542c88a", // stars
            "https://images.unsplash.com/photo-1454789548928-9efd52dc4031", // nebula
            "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0", // galaxy
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429", // space
            "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa", // stars
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa", // deep space
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-60 w-full object-cover rounded-xl hover:scale-105 transition"
              alt="space"
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 bg-black px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready for Launch?
        </h2>

        <p className="text-gray-400 mb-6">
          Your journey beyond the stars begins here.
        </p>

        <button
          onClick={() => navigate("/destinations")}
          className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg text-lg font-semibold"
        >
          Launch Now 
        </button>
      </div>
    </div>
  );
}
