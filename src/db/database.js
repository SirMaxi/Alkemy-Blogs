const Sequelize = require('sequelize');

const PostModel = require('../models/postModel');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
);

const Post = PostModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log('Tables synchronized');
});

module.exports = {
  Post,
};
