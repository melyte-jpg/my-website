import { useState } from "react";

export default function AddDestination() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/destinations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    alert("Destination added!");
    console.log(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Add Destination</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border p-2 block mb-2"
        />

        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="border p-2 block mb-2"
        />

        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="border p-2 block mb-2"
        />

        <button className="bg-green-600 text-white px-4 py-2">
          Add
        </button>
      </form>
    </div>
  );
}
