import { useState } from "react";

export default function AddDestination() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/destinations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          price,
          image,
          description,
        }),
      });

      const data = await res.json();
      console.log("Added:", data);

      alert("Destination added successfully!");

      // clear form
      setName("");
      setPrice("");
      setImage("");
      setDescription("");

    } catch (err) {
      console.log(err);
      alert("Error adding destination");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-white/10 p-6 rounded-lg w-96">

        <h1 className="text-xl mb-4 text-center">Add Destination</h1>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 mb-2 text-black"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full p-2 mb-2 text-black"
        />

        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="w-full p-2 mb-2 text-black"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 mb-4 text-black"
        />

        <button
          onClick={handleAdd}
          className="bg-green-600 w-full py-2"
        >
          Add Destination
        </button>

      </div>
    </div>
  );
}
