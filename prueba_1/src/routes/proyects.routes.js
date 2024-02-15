const { Router } = require("express");
const route = Router();
const {
  getProyects,
  createProyects,
  updateProyects,
  deleteProyects,
} = require("../handlers/proyects.handler");

route.get("/proyects", getProyects);
route.post("/proyects", createProyects);
route.put("/proyects/:id", updateProyects);
route.delete("/proyects/:id", deleteProyects);
route.get("/proyects/:id", getProyects);

module.exports = route;
