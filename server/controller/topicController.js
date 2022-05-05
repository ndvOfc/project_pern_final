const {

} = require('../db/models/models');
const sequelize = require('../db/db');

class TopicController {
  async getQuestions(req, res) {
    try {
      const { module, moduleTopics, topics } = req.params;
      const answerParams = topics.replace(/Questions/ig, 'Answers');
      const questionId = topics.replace(/.$/, 'Id');

      const questions = await sequelize.query(`SELECT id, question FROM "${topics}"`);
      const answers = await sequelize.query(`SELECT id, answer, "${questionId}"  FROM "${answerParams}"`);
      res.json({ questions: questions[0], answers: answers[0] });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new TopicController();
