const bcrypt = require('bcrypt');

class UserController {
  async registration(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: 'Поля почты и пароля не должны быть пустыми' });
      }
    } catch (e) {

    }
  }

  async login(req, res) {
    try {

    } catch (e) {

    }
  }

  async logout(req, res) {

  }
}
