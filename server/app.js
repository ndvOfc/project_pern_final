/* eslint-disable no-unused-vars */
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const config = require('./config/config');
const sequelize = require('./db/db');
const models = require('./db/models/models');
const router = require('./routes/mainRouter');
require('./passport');
// eslint-disable-next-line import/order
const bodyParser = require('body-parser');
const corsConfig = require('./config/corsConfig');
const authRouter = require('./routes/authRouter');

const PORT = process.env.PORT ?? 5000;
const app = express();

config(app);
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use('/api', router);
app.use('/auth', authRouter);

// Функция запуска сервера с обработчиком ошибки
const startServer = async () => {
  try {
    await sequelize.authenticate(); // Проверяем подключение к БД
    app.listen(PORT, () => console.log(`>>>> Server started at ${PORT} port <<<<`));
  } catch (e) {
    console.log(e);
  }
};

startServer();
