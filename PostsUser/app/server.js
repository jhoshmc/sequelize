const express = require("express");
const server = express();
const userRoutes = require("./src/routes/user.routes");
const postRouter = require("./src/routes/post.routes");
//midelwares
server.use(express.json());
server.use(userRoutes);
server.use(postRouter);

module.exports = server;
