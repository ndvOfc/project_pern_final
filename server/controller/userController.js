/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const { User } = require('../db/models/models');

class UserController {
  async registration(req, res) {
    try {
      const errors = validationResult(req); // <--- автоматически достанет тело и провалидируется
      if (!errors.isEmpty()) {
        return res.status(401).json({ message: 'Упс! Что-то пошло не так! Поля почты и пароля не должны быть пустыми! Пароль должен быть от 3 до 30 символов, а почта должна содержать "@" и доменную зону (ru, com и т.д.)', errors, status: 401 });
      }

      const { name, email, password } = req.body;

      const candidate = await User.findOne({ where: { email } });

      if (candidate) {
        return res.status(403).json({ message: 'Поле с таким именем уже существует', status: 403 });
      }

      const hashPassword = await bcrypt.hash(password, 4);

      const user = await User.create({ name, email, password: hashPassword });
      // console.log('new user ', user);
      req.session.user = user.email; // <--- обговорить логику, быть может редирект на главную а не логин?
      return res.status(200).json({ message: 'Пользователь успешно зарегистрирован', status: 200 });
    } catch (e) {
      return res.status(404).json({ message: e, status: 404 });
    }
  }

  async login(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).json({ message: 'Упс! Что-то пошло не так! Поля почты и пароля не должны быть пустыми! Пароль должен быть от 3 до 30 символов, а почта должна содержать "@" и доменную зону (ru, com и т.д.)', errors, status: 401 });
      }

      const { email, password } = req.body;
      const candidate = await User.findOne({ where: { email } });

      if (!candidate) {
        return res.status(400).json({ message: 'Пароль или почта указаны неверно', status: 400 });
      }
      const isPassword = await bcrypt.compare(password, candidate.password);
      if (isPassword && candidate) {
        req.session.user = candidate;
        // console.log(req.session);
        return res.status(200).json({ message: 'Вы успешно авторизовались', status: 200, user: candidate });
      }
      return res.status(401).json({ message: 'Неправильный пароль', status: 401 });
    } catch (e) {
      return res.status(404).json({ message: 'Я не знаю как ты это сделал', status: 404 });
    }
  }

  async auth(req, res) {
    try {
      if (req.session.user) {
        console.log(req.session, 'SESSION AUTH');
        return res.status(200).json({ user: req.session.user, status: 200 });
      } return res.status(404).json({ user: req.session.user, status: '' });
    } catch (e) {
      return res.status(404).json({ message: 'Ошибка проверки сессии', status: 404 });
    }
  }

  async logout(req, res) {
    // console.log(req.session, 'DELETE SESSION');
    req.session = null; // сессия не удаялется.
    res.clearCookie('user_sid').end(); // вызывает ошибку , не может обратиться к заголовкам, по этой же причине не создается кука в браузере. Возможно проблема с CORS
    // res.status(200).json({ message: 'Вы вышли' });
    // req.session.destroy((err) => {
    //   if (err) {
    //     return res.send({ error: 'Logout error' });
    //   }
    //   res.clearCookie('user_sid', { path: '/' });
    //   return res.send({ clearSession: 'success' });
    // });
    // req.session = null;
    // req.logout();
    // res.redirect(process.env.CLIENT_URL);
    // req.cookies.clear(); // такой команды наверное нет.
    // req.sessionStorage.clear();
    // res.redirect('http://localhost:3000/');
    // res.status(200).json({ message: 'Вы вышли из системы' });
  }
}

module.exports = new UserController();
