const express = require("express");
const server = express();
const proyectRoutes = require("./src/routes/proyects.routes");

//*midelwares
server.use(express.json());
server.use(proyectRoutes);

module.exports = server;
