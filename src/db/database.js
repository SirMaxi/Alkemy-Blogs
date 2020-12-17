const Sequelize = require('sequelize');

const PostModel = require('../models/postModel');

const sequelize = new Sequelize(
  'alkemy_challenge',
  'maximiliano',
  'Peritomor10Mysql',
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },
);

const Post = PostModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log('Tables synchronized');
});

module.exports = {
  Post,
};
