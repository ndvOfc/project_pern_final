const router = require('express').Router();
const TopicController = require('../controller/topicController');

router.get('/:moduleTopics/:topics', TopicController.getQuestions);
router.post('/:moduleTopics/:topics', TopicController.postResults);

module.exports = router;
