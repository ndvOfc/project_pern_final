const passport = require('passport');
const { User } = require('../db/models/models');

class AuthGoogleController {
  async authSuccess(req, res) {
    if (req.user) {
      const userDto = await User.findOne({ where: { email: req.user.emails[0].value } });
      res.status(200).json({
        success: true,
        message: 'successfull',
        user: userDto,
        // cookies: req.cookies,
      });
    }
  }

  async authFailed(req, res) {
    res.status(401).json({
      success: false,
      message: 'failure',
    });
  }

  async authLogout(req, res) {
    req.logout();
    res.redirect(CLIENT_URL);
  }

  async authenticate() {
    passport.authenticate('google', { scope: ['profile', 'email'] });
  }
}

module.exports = new AuthGoogleController();
