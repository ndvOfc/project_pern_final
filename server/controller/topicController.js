/* eslint-disable no-restricted-syntax,guard-for-in,no-inner-declarations,max-len,class-methods-use-this,consistent-return */
// eslint-disable-next-line no-empty-pattern
const {
  User,
  Progress,
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
      const { score, topic, userId } = req.body;

      const findProgress = await Progress.findOne({ where: { userId, titleTopic: topic } });

      if (!findProgress) {
        await Progress.create({ titleTopic: topic, score, userId });
      } else if (findProgress.score < score) {
        await Progress.update({ titleTopic: topic, score, userId }, { where: { userId, titleTopic: topic } });
      }

      const data = await Progress.findAll({ where: { userId } });
      // eslint-disable-next-line no-return-assign
      const fullProgress = data.reduce((acc, el) => acc + el.score, 0);

      const prevScore = await User.findByPk(userId);
      const totalScore = prevScore.progress + fullProgress;

      await User.update({ progress: totalScore }, { where: { id: userId } });

      return res.json({ score, topic, userId });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new TopicController();
