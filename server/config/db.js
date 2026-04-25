const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQLDATABASE || "tourism_db",
  process.env.MYSQLUSER || "root",
  process.env.MYSQLPASSWORD || "",
  {
    host: process.env.MYSQLHOST || "localhost",
    port: process.env.MYSQLPORT || 3306,
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;
