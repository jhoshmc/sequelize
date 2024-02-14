require("dotenv").config;
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const proyectModel = require("./models/proyect");
const taskModel = require("./models/task");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`,
  { logging: false }
);
proyectModel(sequelize);
taskModel(sequelize);

const { Proyect, Task } = sequelize.models;

module.exports = { ...sequelize.models, sequelize };
