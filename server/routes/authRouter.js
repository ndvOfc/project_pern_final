const router = require('express').Router();
const passport = require('passport');
const authController = require('../controller/authController');

router.get('/login/success', authController.authSuccess);

router.get('/login/failed', authController.authFailed);

router.get('/logout', authController.authLogout);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

/* GOOGLE */
router.get(
  '/google/callback',
  passport.authenticate('google', {
    // по дефолту стояло без модулей
    // successRedirect: '/auth/login/success',
    successRedirect: `${process.env.CLIENT_URL}/modules/JS`,
    failureRedirect: '/login/failed',
  }),
);

/* GITHUB */
router.get('/github', passport.authenticate('github', { scope: ['profile', 'user:email'] }));

router.get(
  '/github/callback',
  passport.authenticate('github', {
    // по дефолту стояло без модулей
    successRedirect: `${process.env.CLIENT_URL}/modules/JS`,
    failureRedirect: '/login/failed',
  }),
);

module.exports = router;
