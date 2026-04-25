module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,

    email: {
      type: DataTypes.STRING,
      unique: true,
    },

    password: DataTypes.STRING,

    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
  });

  return User;
};
