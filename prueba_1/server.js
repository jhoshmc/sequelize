const express = require("express");
const server = express();
const proyectRoutes = require("./src/routes/proyects.routes");
const taskRouter = require("./src/routes/task.routes");
//*midelwares
server.use(express.json());
server.use(proyectRoutes);
server.use(taskRouter);

module.exports = server;
