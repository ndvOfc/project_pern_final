const router = require('express').Router();
const TopicController = require('../controller/topicController');

router.get('/:moduleTopics/:topics', TopicController.getQuestions);

module.exports = router;
