// eslint-disable-next-line max-len
/* eslint-disable no-unused-vars,guard-for-in,no-restricted-syntax,no-await-in-loop,import/no-extraneous-dependencies */
// noinspection JSUnusedLocalSymbols
// eslint-disable-next-line import/no-unresolved

require('dotenv').config();
const modulesSeedArray = require('../globalSeeders/modules/modules');
const jsModuleSeedObject = require('../globalSeeders/JS/JSmodule');
const expressModuleSeedObject = require('../globalSeeders/Express/EXPRESSmodule');
const reactModuleSeedObject = require('../globalSeeders/React/REACTmodule');
const nodeModuleSeedObject = require('../globalSeeders/Node/NODEmodule');
const jsBasicQuestionsArray = require('../globalSeeders/JS/JSbasic/questions');
const jsBasicAnswersObject = require('../globalSeeders/JS/JSbasic/answers');
const jsFunctionQuestionsArray = require('../globalSeeders/JS/JSfunction/questions');
const jsFunctionAnswersObject = require('../globalSeeders/JS/JSfunction/answers');
const jsES6Questions = require('../globalSeeders/JS/ES6/questions');
const jsES6Answers = require('../globalSeeders/JS/ES6/answers');
const sequelize = require('../db');

const {
  User,
  Modules,
  JSmodule,
  EXPRESSmodule,
  REACTmodule,
  NODEmodule,
  JSbasicQuestion,
  JSbasicAnswer,
  JSfunctionQuestion,
  JSfunctionAnswer,
  JSES6Question,
  JSES6Answer,

} = require('../models/models');

module.exports = {
  // seed modules & JS module
  seedModules: async () => {
    for (const i in modulesSeedArray) {
      await Modules.create({
        titleModules: modulesSeedArray[i],

      });
    }

    for (const key in jsModuleSeedObject) {
      await JSmodule.create({
        titleThemes: key,
        paramData: jsModuleSeedObject[key],
        moduleId: 1,
      });
    }

    for (const key in expressModuleSeedObject) {
      await EXPRESSmodule.create({
        titleThemes: key,
        paramData: expressModuleSeedObject[key],
        moduleId: 2,
      });
    }

    for (const key in reactModuleSeedObject) {
      await REACTmodule.create({
        titleThemes: key,
        paramData: reactModuleSeedObject[key],
        moduleId: 3,
      });
    }

    for (const key in nodeModuleSeedObject) {
      await NODEmodule.create({
        titleThemes: key,
        paramData: nodeModuleSeedObject[key],
        moduleId: 4,
      });
    }
  },
  // seed JSBasicTheme
  seedJSBasic: async () => {
    for (const key in jsBasicQuestionsArray) {
      await JSbasicQuestion.create({
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

  seedJSFunction: async () => {
    for (const key in jsFunctionQuestionsArray) {
      await JSfunctionQuestion.create({
        question: jsFunctionQuestionsArray[key],
        JSmoduleId: 2,
      });
    }

    for (const key in jsFunctionAnswersObject) {
      await JSfunctionAnswer.create({
        answer: key,
        isCorrect: jsFunctionAnswersObject[key][0],
        JSfunctionQuestionId: jsFunctionAnswersObject[key][1],
      });
    }
  },

  seedJSES6: async () => {
    for (const key in jsES6Questions) {
      await JSES6Question.create({
        question: jsES6Questions[key],
        JSmoduleId: 3,
      });
    }

    for (const key in jsES6Answers) {
      await JSES6Answer.create({
        answer: key,
        isCorrect: jsES6Answers[key][1],
        JSES6QuestionId: jsES6Answers[key][0],
      });
    }
  },

  test: async () => {
    console.log('FOR TESTING');
    for (const key in jsModuleSeedObject) {
      console.log(jsModuleSeedObject[key]);
    }
  },
  // seeder (you can choose quantity in script)
  seedDb: async function seed() {
    await this.seedModules();
    await this.seedJSBasic();
    await this.seedJSFunction();
    await this.seedJSES6();
  },
};
// !necessary for running functions separately
require('make-runnable');
