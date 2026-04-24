module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define("Destination", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
    longDescription: DataTypes.TEXT,
  });

  return Destination;
};
