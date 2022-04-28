const router = require('express').Router();
const userController = require('../controller/userController');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/logout');

module.exports = router;
