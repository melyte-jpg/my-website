const express = require("express");
const router = express.Router();
const db = require("../models");

const User = db.User;

// GET ALL USERS (optional but useful)
router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});


module.exports = router;
