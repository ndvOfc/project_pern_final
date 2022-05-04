const router = require('express').Router();
const moduleController = require('../controller/moduleController');

router.get('/', moduleController.getModules);
// router.get('/:id', moduleController.getJsModule);
router.get('/:moduleTopics', moduleController.getOneModule);

module.exports = router;
