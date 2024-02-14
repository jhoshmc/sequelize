require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { sequelize } = require("./src/db");
const server = express();
server.use(express.json());
server.use(morgan());
const PORT = process.env.PORT;
console.log(PORT);
server.listen(PORT, () => {
  console.log(`servidor conectado en: ${PORT}`);
  sequelize.sync({ force: true });
});

module.exports = server;
