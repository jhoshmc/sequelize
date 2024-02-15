const { Proyect, Task } = require("../db");

const getProyects = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const proyect = await Proyect.findByPk(id);
      if (!proyect) return res.status(404).send("proyect dont exits");
      return res.status(200).json(proyect);
    }
    const proyects = await Proyect.findAll();
    return res.status(200).json(proyects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProyects = async (req, res) => {
  try {
    const { name, priority, description } = req.body;
    const newProyect = await Proyect.create({
      name,
      priority,
      description,
    });
    res.status(200).json(newProyect);
  } catch (error) {
    return res.satatus(500).json({ message: error.message });
  }
};

const updateProyects = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;
    const proyect = await Proyect.findByPk(id);
    proyect.name = name;
    proyect.priority = priority;
    proyect.description = description;
    await proyect.save();
    res.status(200).json(proyect);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProyects = async (req, res) => {
  try {
    const { id } = req.params;
    await Proyect.destroy({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPoryectsTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findAll({
      where: {
        proyectId: id,
      },
    });
    res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProyects,
  createProyects,
  updateProyects,
  deleteProyects,
  getPoryectsTask,
};
