module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define("Destination", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    price: DataTypes.STRING,
  });

  return Destination;
};
