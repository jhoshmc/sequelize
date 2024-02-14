require("dotenv").config;
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`,
  { logging: false }
);

module.exports = { sequelize };
