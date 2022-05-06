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

      const questions = await sequelize.query(`SELECT id, question FROM "${topics}"`);
      const answers = await sequelize.query(`SELECT id, answer, "isCorrect", "${questionId}"  FROM "${answerParams}"`);
      res.json({ topic: module[0], questions: questions[0], answers: answers[0] });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new TopicController();
