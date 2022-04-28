/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
const bcrypt = require('bcrypt');
const { User } = require('../db/models/models');

class UserController {
  async registration(req, res) {
    try {
      const { name, email, password } = req.body;
      // console.log(email);
      if (!email || !password) {
        return res.status(400).json({ message: 'Поля почты и пароля не должны быть пустыми' });
      }
      const candidate = await User.findOne({ where: { email } });

      if (candidate) {
        return res.status(403).json({ message: 'Поле с таким именем уже существует' });
      }

      const hashPassword = await bcrypt.hash(password, 4);

      const user = await User.create({ name, email, password: hashPassword });
      // req.session.user = user; <--- обговорить логику, быть может редирект на главную а не логин?
      return res.status(200).json({ message: 'Пользователь успешно зарегистрирован' });
    } catch (e) {
      return res.status(404).json({ message: e });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const candidate = await User.findOne({ where: { email } });

      if (!email || !password) {
        return res.status(400).json({ message: 'Поля почты и пароля не должны быть пустыми' });
      }
      if (!candidate) {
        return res.status(400).json({ message: 'Пароль или почта указаны неверно' });
      }
      const isPassword = await bcrypt.compare(password, candidate.password);
      if (isPassword && candidate) {
        req.session.user = candidate;
        return res.status(200).json({ message: 'Вы успешно авторизовались' });
      }
    } catch (e) {
      return res.status(404).json({ message: 'Я не знаю как ты это сделал' });
    }
  }

  async logout(req, res) {
    req.session.destroy();
    // req.sessionStorage.clear();
    // res.redirect('http://localhost:3000/login');
    res.status(200).json({ message: 'Вы вышли из системы' });
  }
}

module.exports = new UserController();
