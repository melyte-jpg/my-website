require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

require("./models");

const app = express();

// ✅ CORS
app.use(cors({
  origin: "*",
}));

app.use(express.json());

// ✅ ROUTES
app.use("/api/destinations", require("./routes/destinationRoutes"));
app.use("/api/users", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/favorites", require("./routes/favoriteRoutes"));

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ DB + SERVER START
sequelize.authenticate()
  .then(() => {
    console.log("DB connected");
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB Error:", err);
  });
