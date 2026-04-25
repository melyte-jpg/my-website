const express = require("express");
const router = express.Router();
const db = require("../models");

const Booking = db.Booking;

// CREATE BOOKING
router.post("/", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.json(booking);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// GET BOOKINGS FOR ONE USER (FIXED)
router.get("/:userId", async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { userId: req.params.userId },
      include: [db.User, db.Destination],
    });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
