module.exports = (sequelize, type) =>
  sequelize.define('post', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: type.STRING,
    body: type.STRING,
    image: type.STRING,
    categoryId: {
      type: type.INTEGER,
      foreingKey: true,
      allowNull: false,
    },
  });
