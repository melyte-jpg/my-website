const express = require("express");
const router = express.Router();
const db = require("../models");

const Destination = db.Destination;

// GET ALL DESTINATIONS
router.get("/", async (req, res) => {
  try {
    const destinations = await Destination.findAll();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET SINGLE DESTINATION
router.get("/:id", async (req, res) => {
  try {
    const destination = await Destination.findByPk(req.params.id);

    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.json(destination);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE DESTINATION (ADMIN ONLY LOGIC - SIMPLE VERSION)
router.post("/", async (req, res) => {
  try {
    const { name, price, image, description } = req.body;

    // basic validation
    if (!name || !price || !image || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const destination = await Destination.create({
      name,
      price,
      image,
      description,
    });

    res.json(destination);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
