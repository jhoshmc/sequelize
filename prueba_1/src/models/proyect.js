const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define(
    "Proyect",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      priority: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    }
  );
