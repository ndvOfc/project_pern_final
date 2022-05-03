const {
  Modules,
  JSmodule,
  JSbasicQuestions,
  JSbasicAnswer,
} = require('../db/models/models');

class TopicController {
  async getQuestions (req, res) {
    try {
      const { module, topic } = req.params;

    } catch (e) {

    }
  }



module.exports = new TopicController();
