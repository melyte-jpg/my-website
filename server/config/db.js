const { Sequelize } = require("sequelize");

const db = new Sequelize("tourism_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
