require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { sequelize } = require("./src/db");
const PORT = process.env.PORT;
const server = express();

server.use(express.json());
// server.use(morgan());

async function main() {
  try {
    server.listen(PORT, () => {
      console.log(`servidor conectado en: ${PORT}`);
      sequelize.sync({ force: true });
    });
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
main();

module.exports = server;
