const express = require("express");
const server = express();
const userRoutes = require("./src/routes/user.routes");
const postRouter = require("./src/routes/post.routes");
//midelwares
server.use(express.json());
// cors
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(userRoutes);
server.use(postRouter);

module.exports = server;
