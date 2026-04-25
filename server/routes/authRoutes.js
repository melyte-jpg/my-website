const express = require("express");
const router = express.Router();
const db = require("../models");

const User = db.User;

console.log("AUTH ROUTES LOADED");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      role: "user",
    });

    res.json({
      message: "User registered successfully",
      user,
    });

  } catch (err) {
    console.log("REGISTER ERROR:", err); // IMPORTANT DEBUG
    res.status(500).json({ error: err.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email, password }
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
