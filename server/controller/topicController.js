/* eslint-disable no-restricted-syntax,guard-for-in */
// eslint-disable-next-line no-empty-pattern
const {
} = require('../db/models/models');

const sequelize = require('../db/db');

class TopicController {
  // eslint-disable-next-line class-methods-use-this
  async getQuestions(req, res) {
    try {
      const { topics } = req.params;
      const answerParams = topics.replace(/Questions/ig, 'Answers');
      const questionId = topics.replace(/.$/, 'Id');
      const answerList = [];
      const questionList = [];

      const dataQuestions = await sequelize.query(`SELECT id, question FROM "${topics}"`);
      const dataAnswers = await sequelize.query(`SELECT id, answer, "isCorrect", "${questionId}"  FROM "${answerParams}"`);

      const questions = [...dataQuestions[0]];
      const answers = [...dataAnswers[0]];
      const temps = [];

      questions.forEach((el) => {
        answers.forEach((x) => {
          if (x[`${questionId}`] === el.id) {
            answerList.push(x);
          }
        });
        temps.push({ question: el.question, answerList });
      });
      const sortedAnswers = temps.map((el, idx) => el.answerList.filter((x) => x[`${questionId}`] === (idx + 1)));
      questions.forEach((el, idx) => {
        answers.forEach((x) => {
          if (x[`${questionId}`] === el.id) {
            answerList.push(x);
          }
        });
        questionList.push({ question: el.question, answerList: sortedAnswers[idx] });
      });

      res.json(questionList);
    } catch (e) {
      console.log(e);
    }
  }

  async postResults(req, res) {
    try {
      const results = req.body;
      console.log('RESULTS FROM REQ BODY >>>>>>>>>>>>>>>>>>>>  ', results);
      return res.json(results);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new TopicController();
