/* eslint-disable max-len */
const { User, Progress } = require('../db/models/models');

class AuthController {
  async authSuccess(req, res) {
    console.log('INFO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', req.user);
    if (req.user) {
      if (req.user.emails) {
        const userDto = await User.findOne({ where: { email: req.user.emails[0].value } });
        res.status(200).json({
          success: true,
          message: 'successfull',
          user: userDto,
          status: 200,
          // cookies: req.cookies,
        });
      }
      if (req.user.username) {
        const userDto = await User.findOne({ where: { email: req.user.username } });
        res.status(200).json({
          success: true,
          message: 'successfull',
          user: userDto,
          status: 200,
          // cookies: req.cookies,
        });
      }
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
    res.redirect(process.env.CLIENT_URL);
  }
}

module.exports = new AuthController();
