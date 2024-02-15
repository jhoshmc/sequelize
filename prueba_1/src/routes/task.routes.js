const { Router } = require("express");
const taskRouter = Router();
const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  getTask,
} = require("../handlers/tasks.handler");

taskRouter.get("/task", getTasks);
taskRouter.post("/task", createTask);
taskRouter.put("/task/:id", updateTask);
taskRouter.delete("/task/:id", deleteTask);
taskRouter.get("/task/:id", getTask);

module.exports = taskRouter;
