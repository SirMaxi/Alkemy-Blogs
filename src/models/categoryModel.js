module.exports = (sequelize, type) =>
  sequelize.define('category', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: type.STRING,
      allowNull: false,
    },
  });
