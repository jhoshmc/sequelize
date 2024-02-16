const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define("Post", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaulValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
    },
  });
