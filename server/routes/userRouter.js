const router = require('express').Router();
const { body } = require('express-validator');
const userController = require('../controller/userController');

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 30 }),
  userController.registration,
);

router.post(
  '/login',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 30 }),
  userController.login,
);

router.get('/logout', userController.logout);

module.exports = router;
