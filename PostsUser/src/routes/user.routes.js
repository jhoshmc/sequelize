const { Router } = require("express");
const userRoutes = Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../handlers/user.handler");

userRoutes.get("/user", getUsers);
userRoutes.post("/user/", createUser);
userRoutes.put("/user/:id", updateUser);
userRoutes.delete("/user/:id", deleteUser);

module.exports = userRoutes;
