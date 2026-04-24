const express = require("express");
const router = express.Router();

const { User } = require("../models");



// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    res.json({
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// LOGIN (simple version)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email, password },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
