/* eslint-disable */
// noinspection JSUnusedLocalSymbols
// eslint-disable-next-line import/no-unresolved

require('dotenv').config();

const sequelize = require('../db');
const {
  User,
  Modules,
  JSmodule,
  JSbasicQuestions,
  JSbasicAnswer,
} = require('../models/models');
const jsBasicQuestionsArray = require('../globalSeeders/JS/JSbasic/questions');
const jsBasicAnswersObject = require('../globalSeeders/JS/JSbasic/answers');

module.exports = {
  // sync database
  syncDb: async () => await sequelize.sync(),

  // force sync database (! destroy all data in tables)
  syncDbForce: async () => await sequelize.sync({force: true}),

  // no comments)))
  dropDb: async () => await sequelize.drop(),


}
// !necessary for running functions separately
require('make-runnable');
