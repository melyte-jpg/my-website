const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

// ========================
// MIDDLEWARE
// ========================
app.use(cors());
app.use(express.json());

// ========================
// ROUTES
// ========================
const destinationRoutes = require("./routes/destinationRoutes");
app.use("/api/destinations", destinationRoutes);

// ========================
// TEST ROUTE
// ========================
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ========================
// DATABASE + SERVER START
// ========================
db.authenticate()
  .then(() => {
    console.log("✅ Database connected");

    return db.sync({ alter: true });
  })
  .then(() => {
    console.log("📦 Tables synced");

    app.listen(5000, () => {
      console.log("🚀 Server running on http://localhost:5000");
    });
  })
  .catch((err) => {
    console.log("❌ DB Error:", err);
  });
