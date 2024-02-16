const express = require("express");
const server = express();
const userRoutes = require("./src/routes/user.routes");
//midelwares
server.use(express.json());
server.use(userRoutes);

module.exports = server;
