const express = require("express");
const router = express.Router();
const db = require("../models");
const Destination = db.Destination;

router.get("/", async (req, res) => {
  try {
    console.log("MODEL CHECK:", Destination);

    const destinations = await Destination.findAll();

    res.json(destinations);
  } catch (err) {
    console.log("FULL ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const destination = await Destination.findByPk(req.params.id);

    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.json(destination);
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
