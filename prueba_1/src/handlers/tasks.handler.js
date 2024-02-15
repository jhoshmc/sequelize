const { json } = require("sequelize");
const { Task } = require("../db");

const getTasks = async (req, res) => {
  try {
    const allTask = await Task.findAll();
    res.status(200).json(allTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { name, done, proyectId } = req.body;
    const newTask = await Task.create({
      name,
      done,
      proyectId,
    });
    return res.status(200).json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({ where: { id } });
    res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ where: { id } });
    task.set(req.body);
    await task.save();
    return res.status(200).send("se modifico");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({ where: { id } });
    res.status(200).send("se eleimino correctamente");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
