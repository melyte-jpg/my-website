require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

require("./models");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use("/api/destinations", require("./routes/destinationRoutes"));
app.use("/api/users", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/favorites", require("./routes/favoriteRoutes"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

// 🔥 START SERVER FIRST (VERY IMPORTANT FOR RENDER)
app.listen(PORT, () => {
  console.log("Server running on PORT:", PORT);

  // DB connects AFTER server starts (non-blocking style)
  sequelize.authenticate()
    .then(() => {
      console.log("DB connected");
      return sequelize.sync();
    })
    .catch((err) => {
      console.log("DB Error:", err.message);
    });
});
