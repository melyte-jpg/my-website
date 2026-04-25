const Sequelize = require("sequelize");
const db = require("../config/db");

const UserModel = require("./User");
const DestinationModel = require("./Destination");
const BookingModel = require("./Booking");
const FavoriteModel = require("./Favorite"); // ✅ ADD

const User = UserModel(db, Sequelize.DataTypes);
const Destination = DestinationModel(db, Sequelize.DataTypes);
const Booking = BookingModel(db, Sequelize.DataTypes);
const Favorite = FavoriteModel(db, Sequelize.DataTypes);

// associations
User.hasMany(Booking, { foreignKey: "userId" });
Booking.belongsTo(User, { foreignKey: "userId" });

Destination.hasMany(Booking, { foreignKey: "destinationId" });
Booking.belongsTo(Destination, { foreignKey: "destinationId" });

// ⭐ FAVORITES
User.hasMany(Favorite, { foreignKey: "userId" });
Favorite.belongsTo(User, { foreignKey: "userId" });

Destination.hasMany(Favorite, { foreignKey: "destinationId" });
Favorite.belongsTo(Destination, { foreignKey: "destinationId" });

module.exports = {
  User,
  Destination,
  Booking,
  Favorite, // ✅ EXPORT
};
