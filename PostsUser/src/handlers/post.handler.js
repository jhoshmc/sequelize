const { Post } = require("../db");

const getPosts = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const post = await Post.findOne({ where: { id } });
      return res.status(200).json(post);
    }
    const allPosts = await Post.findAll();
    res.status(200).json(allPosts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const createPosts = async (req, res) => {
  try {
    const { userId, title, body } = req.body;
    if (!title || !body) return res.status(400).send("faltan completar datos ");
    const newPost = await Post.create({ title, body });
    const post = await newPost.setUser(userId);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updatePosts = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findByPk(id);
    if (!post) return res.status(404).send("no se encontro el post");

    post.set(req.body);
    await post.save();
    return res.status(200).json(post); //send("cambios guardados");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deletePosts = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.destroy({ where: { id } });
    return res.status(200).send("se elimino el post");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
};
