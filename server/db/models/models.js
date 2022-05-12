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
  img: { type: DataTypes.STRING, allowNull: true },
  titleModules: { type: DataTypes.STRING },
});

const JSmodule = sequelize.define('JSmodule', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  titleThemes: { type: DataTypes.STRING },
  paramData: { type: DataTypes.STRING },
});

const JSbasicQuestion = sequelize.define('JSbasicQuestion', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  question: { type: DataTypes.STRING },
});

const JSbasicAnswer = sequelize.define('JSbasicAnswer', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  answer: { type: DataTypes.STRING },
  isCorrect: { type: DataTypes.BOOLEAN },
});

const JSfunctionQuestion = sequelize.define('JSfunctionQuestion', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  question: { type: DataTypes.STRING },
});

const JSfunctionAnswer = sequelize.define('JSfunctionAnswer', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  answer: { type: DataTypes.STRING },
  isCorrect: { type: DataTypes.BOOLEAN },
});

const JSES6Question = sequelize.define('JSES6Question', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  question: { type: DataTypes.STRING },
});

const JSES6Answer = sequelize.define('JSES6Answer', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  answer: { type: DataTypes.STRING },
  isCorrect: { type: DataTypes.BOOLEAN },
});

Modules.hasOne(JSmodule);
JSmodule.belongsTo(Modules);

JSmodule.hasOne(JSbasicQuestion);
JSbasicQuestion.belongsTo(JSmodule);

JSmodule.hasOne(JSfunctionQuestion);
JSfunctionQuestion.belongsTo(JSmodule);

JSbasicQuestion.hasMany(JSbasicAnswer);
JSbasicAnswer.belongsTo(JSbasicQuestion);

JSfunctionQuestion.hasMany(JSfunctionAnswer);
JSfunctionAnswer.belongsTo(JSfunctionQuestion);

JSES6Question.hasMany(JSES6Answer);
JSES6Answer.belongsTo(JSES6Question);

module.exports = {
  User,
  Modules,
  JSmodule,
  JSbasicQuestion,
  JSbasicAnswer,
  JSfunctionQuestion,
  JSfunctionAnswer,
  JSES6Question,
  JSES6Answer,
};
