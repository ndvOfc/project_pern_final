const router = require('express').Router();
const passport = require('passport');
const { User } = require('../db/models/models');

const { CLIENT_URL } = process.env;

router.get('/login/success', async (req, res) => {
  console.log('===============================fasdfsdfdsafasf');
  if (req.user) {
    const userDto = await User.findOne({ where: { email: req.user.emails[0].value } });
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: userDto,
      // cookies: req.cookies,
    });
  }
});

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

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

// github
router.get('/github', passport.authenticate('github', { scope: ['profile', 'email'] }));

router.get(
  '/github/callback',
  passport.authenticate('github', {
    // по дефолту стояло без модулей
    successRedirect: `${CLIENT_URL}/modules`,
    failureRedirect: '/login/failed',
  }),
);

module.exports = router;
