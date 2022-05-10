/* eslint-disable no-unused-vars */
require('dotenv').config();
const express = require('express');
const config = require('./config/config');
const sequelize = require('./db/db');
const models = require('./db/models/models');
const router = require('./routes/mainRouter');
require('./passports/passport');
// eslint-disable-next-line import/order
const authRouter = require('./routes/authRouter');

const PORT = process.env.PORT ?? 5000;
const app = express();

config(app);
app.use('/api', router);
app.use('/auth', authRouter);

// Функция запуска сервера с обработчиком ошибки
const startServer = async () => {
  try {
    await sequelize.authenticate(); // Проверяем подключение к БД
    app.listen(PORT, () => console.log(`>>>> Шуршит маленький на порту ${PORT} <<<<`));
  } catch (e) {
    console.log(e);
  }
};

startServer();
