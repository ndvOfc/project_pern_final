const router = require('express').Router();
const passport = require('passport');

// github
router.get('/github', passport.authenticate('github', { scope: ['profile', 'user:email'] }));

router.get(
  '/github/callback',
  passport.authenticate('github', {
    // по дефолту стояло без модулей
    successRedirect: `${process.env.CLIENT_URL}/modules/JavaScript`,
    failureRedirect: '/login/failed',
  }),
);

module.exports = router;
