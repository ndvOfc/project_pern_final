const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  progress: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const JSmodule = sequelize.define('JSmodule', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  titleThemes: { type: DataTypes.STRING },
});

module.exports = {
  User, JSmodule,
};
