const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

require("./models");

const app = express();

// CORS
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// ROUTES (FIXED STRUCTURE)
app.use("/api/destinations", require("./routes/destinationRoutes"));
app.use("/api/users", require("./routes/authRoutes")); // register + login
app.use("/api/users", require("./routes/userRoutes")); // optional GET users
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/favorites", require("./routes/favoriteRoutes"));


app.get("/", (req, res) => {
  res.send("API is running...");
});

// DB + SERVER
sequelize.authenticate()
  .then(() => {
    console.log("DB connected");
    return sequelize.sync({ alter: true }); // IMPORTANT FIX
  })
  .then(() => {
    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
    });
  })
  .catch((err) => {
    console.log("DB Error:", err);
  });
