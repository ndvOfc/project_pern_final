const bcrypt = require('bcrypt');

class UserController {
  async registration(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: 'Поля почты и пароля не должны быть пустыми' });
      }
      const candidate = await User.findOne({ where: { email } });

      if (candidate) {
        return res.status(403).json({ message: 'Поле с таким именем уже существует' });
      }

      const hashPassword = await bcrypt.hash(password, 4);

      const user = await User.create({ email, password: hashPassword });
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
    } catch (e) {
      return res.status(404).json({ message: 'Я не знаю как ты это сделал' });
    }
  }

  async logout(req, res) {
    req.session.destroy();
    res.redirect('http://localhost:3000/login');
  }
}
