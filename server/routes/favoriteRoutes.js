const express = require("express");
const router = express.Router();
const db = require("../models");

const Favorite = db.Favorite;
const Destination = db.Destination;

// ADD FAVORITE
router.post("/", async (req, res) => {
  try {
    const favorite = await Favorite.create(req.body);
    res.json(favorite);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET USER FAVORITES
router.get("/:userId", async (req, res) => {
  try {
    const favorites = await Favorite.findAll({
      where: { userId: req.params.userId },
      include: [Destination],
    });

    res.json(favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE FAVORITE
router.delete("/:id", async (req, res) => {
  try {
    await Favorite.destroy({
      where: { id: req.params.id },
    });

    res.json({ message: "Removed" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
