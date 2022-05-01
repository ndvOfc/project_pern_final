const router = require('express').Router();
const moduleController = require('../controller/moduleController');

router.get('/', moduleController.getModules);

module.exports = router;
