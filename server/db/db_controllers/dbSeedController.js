// eslint-disable-next-line max-len
/* eslint-disable no-unused-vars,guard-for-in,no-restricted-syntax,no-await-in-loop,import/no-extraneous-dependencies */
// noinspection JSUnusedLocalSymbols
// eslint-disable-next-line import/no-unresolved

require('dotenv').config();
const modulesSeedArray = require('../globalSeeders/modules/modules');
const jsModuleSeedArray = require('../globalSeeders/JS/JSmodule');
const jsBasicQuestionsArray = require('../globalSeeders/JS/JSbasic/questions');
const jsBasicAnswersObject = require('../globalSeeders/JS/JSbasic/answers');
const sequelize = require('../db');

const {
  User,
  Modules,
  JSmodule,
  JSbasicQuestions,
  JSbasicAnswer,
} = require('../models/models');

module.exports = {
  // seed modules & JS module
  seedModules: async () => {
    for (const i in modulesSeedArray) {
      await Modules.create({
        titleModules: modulesSeedArray[i],
      });
    }

    for (const i in jsModuleSeedArray) {
      await JSmodule.create({
        titleThemes: jsModuleSeedArray[i],
        moduleId: 1,
      });
    }
  },
  // seed JSBasicTheme
  seedJSBasic: async () => {
    for (const key in jsBasicQuestionsArray) {
      await JSbasicQuestions.create({
        question: jsBasicQuestionsArray[key],
        JSmoduleId: 1,
      });
    }

    for (const key in jsBasicAnswersObject) {
      await JSbasicAnswer.create({
        answer: key,
        isCorrect: jsBasicAnswersObject[key][0],
        JSbasicQuestionId: jsBasicAnswersObject[key][1],
      });
    }
  },

  // seeder (you can choose quantity in script)
  seedDb: async function seed() {
    await this.seedModules();
    await this.seedJSBasic();
  },
};
// !necessary for running functions separately
require('make-runnable');
