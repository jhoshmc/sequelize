const { Router } = require("express");
const postRouter = Router();
const {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
} = require("../handlers/post.handler");

postRouter.get("/post", getPosts);
postRouter.post("/post", createPosts);
postRouter.put("/post/:id", updatePosts);
postRouter.delete("/post/:id", deletePosts);
postRouter.get("/post/:id", getPosts);

module.exports = postRouter;
