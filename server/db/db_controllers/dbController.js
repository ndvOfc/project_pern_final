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
  syncDbForce: async () => await sequelize.sync({ force: true }),

  // no comments)))
  dropDb: async () => await sequelize.drop(),

  // seeder (you can choose quantity in script)
  seedDb: async () => {

    // jsBasicQuestions seeder
  for (const key in jsBasicQuestionsArray){
    console.log(jsBasicQuestionsArray[key])
  }
    // for (const key in jsBasicAnswersObject) {
    //   console.log(
    //       `           Ответ                       : ${key}
    //        Является ли верным          : ${jsBasicAnswersObject[key][0]}
    //        Относится к вопросу c id    : ${jsBasicAnswersObject[key][1]}
    //       `
    //   )
    // }
    // jsBasicAnswers seeder
    // for (const key in jsBasicAnswersObject) {
    //   await JSbasicAnswer.create({
    //     answer: key,
    //     isCorrect: jsBasicAnswersObject[key],
    //     JSbasicQuestionsId: 1,
    //   });
    }

    // await Worker.create({
    //   name: randFullName(),
    //   email: randEmail(),
    //   phone: randPhoneNumber(),
    //   isCandidate: true,
    //   isHired: false,
    // });
  // },
};
// !necessary for running functions separately
require('make-runnable');
