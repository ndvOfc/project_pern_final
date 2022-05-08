const router = require('express').Router();
const passport = require('passport');
const authGoogleController = require('../controller/authGoogleController');

const { CLIENT_URL } = process.env;

router.get('/login/success', authGoogleController.authSuccess);

router.get('/login/failed', authGoogleController.authFailed);

router.get('/logout', authGoogleController.authLogout);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    // по дефолту стояло без модулей
    // successRedirect: '/auth/login/success',
    successRedirect: `${CLIENT_URL}/modules/JavaScript`,
    failureRedirect: '/login/failed',
  }),
);

module.exports = router;
