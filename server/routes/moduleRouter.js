const router = require('express').Router();
const moduleController = require('../controller/moduleController');

router.get('/', moduleController.getModules);
router.get('/:id', moduleController.getJsModule);

module.exports = router;
