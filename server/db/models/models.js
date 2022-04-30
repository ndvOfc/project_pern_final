const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  progress: { type: DataTypes.INTEGER, defaultValue: 0 },
  image: { type: DataTypes.STRING, allowNull: true },
});

const Modules = sequelize.define('module', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  titleThemes: { type: DataTypes.STRING },
});

const JSmodule = sequelize.define('JSmodule', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  titleThemes: { type: DataTypes.STRING },
});

const JSbasicQuestions = sequelize.define('JSbasicQuestions', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  question: { type: DataTypes.STRING },
});

const JSbasicAnswer = sequelize.define('JSbasicAnswer', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  answer: { type: DataTypes.STRING },
  isCorrect: { type: DataTypes.BOOLEAN },
});

Modules.hasOne(JSmodule);
JSmodule.belongsTo(Modules);

JSmodule.hasOne(JSbasicQuestions);
JSbasicQuestions.belongsTo(JSmodule);

JSbasicQuestions.hasMany(JSbasicAnswer);
JSbasicAnswer.belongsTo(JSbasicQuestions);

module.exports = {
  User,
  Modules,
  JSmodule,
  JSbasicQuestions,
  JSbasicAnswer,
};
