/* eslint-disable no-unused-vars */
require('dotenv').config();
const express = require('express');
const config = require('./config/config');
const sequelize = require('./db/db');
const models = require('./db/models/models');
const router = require('./routes/mainRouter');

const PORT = process.env.PORT ?? 5000;
const app = express();

config(app);
app.use('/api', router);

// Функция запуска сервера с обработчиком ошибки
const startServer = async () => {
  try {
    await sequelize.authenticate(); // Проверяем подключение к БД
    await sequelize.sync();
    app.listen(PORT, () => console.log(`>>>> Server started at ${PORT} port <<<<`));
  } catch (e) {
    console.log(e);
  }
};

startServer();
