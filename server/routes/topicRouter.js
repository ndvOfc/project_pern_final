const router = require('express').Router();
const moduleController = require('../controller/moduleController');

router.get('/');
router.get('/:module/:topic');

module.exports = router;
