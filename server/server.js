require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

require("./models");

const app = express();

// CORS
app.use(cors({ origin: "*" }));

app.use(express.json());

// ROUTES
app.use("/api/destinations", require("./routes/destinationRoutes"));
app.use("/api/users", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/favorites", require("./routes/favoriteRoutes"));

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("API is running...");
});

// START SERVER FIRST (IMPORTANT FIX)
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on ${PORT}`);

  // DB connects AFTER server starts
  try {
    await sequelize.authenticate();
    console.log("DB connected");

    await sequelize.sync(); // remove alter:true in production
  } catch (err) {
    console.log("DB Error:", err.message);
  }
});
