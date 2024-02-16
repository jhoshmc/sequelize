require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const UserModel = require("./models/User");
const PostModel = require("./models/Post");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`,
  {
    logging: false,
  }
);

UserModel(sequelize);
PostModel(sequelize);

// asociacion
const { User, Post } = sequelize.models;

User.hasMany(Post);

Post.belongsTo(User);

module.exports = {
  ...sequelize.models,
  sequelize,
};
