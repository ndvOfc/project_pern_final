const router = require('express').Router();
const { body } = require('express-validator');
const passport = require('passport');
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

// test PASSPORT TEST
router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
      // for jwt: req.jwt
      cookies: req.cookies,
    });
  }
});
router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: `${process.env.CLIENT_URL}/modules/`,
    failureRedirect: `${process.env.CLIENT_URL}/login/failed`,
  }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect(process.env.CLIENT_URL);
  },
);

// router.get(
//   '/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   (req, res) => {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   },
// );

module.exports = router;
