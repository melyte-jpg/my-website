const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const db = require("../config/db");

const UserModel = require("./User");
const DestinationModel = require("./Destination");

// Initialize models
const User = UserModel(db, Sequelize.DataTypes);
const Destination = DestinationModel(db, Sequelize.DataTypes);

// Store in db object
const models = {
  User,
  Destination,
  sequelize: db,
  Sequelize,
};

module.exports = models;
