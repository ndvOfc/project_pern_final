require("dotenv").config();
const express = require("express");
const sequelize = require("./db/db");
const models = require("./db/models/models");

const PORT = process.env.PORT ?? 5000;

const app = express();

// Функция запуска сервера с обработчиком ошибки
const startServer = async () => {
  try {
    await sequelize.authenticate(); // Проверяем подключение к БД
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`>>>> Server started at ${PORT} port <<<<`)
    );
  } catch (e) {
    console.log(e);
  }
};

startServer();
