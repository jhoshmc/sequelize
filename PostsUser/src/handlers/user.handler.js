const { User } = require("../db");

const getUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).send("faltan ingresar datos");
    const newUser = await User.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    user.set(req.body);
    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.status(200).send(" se elimino exitosamente");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
