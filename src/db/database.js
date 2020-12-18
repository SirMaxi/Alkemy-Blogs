const Sequelize = require('sequelize');
const {
  user,
  host,
  database,
  password,
  dialect,
} = require('../config/env');
const PostModel = require('../models/postModel');

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect,
  define: {
    timestamps: false,
  },
});

const Post = PostModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log('Tables synchronized');
});

module.exports = {
  Post,
};
