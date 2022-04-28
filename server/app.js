require('dotenv').config();
const express = require('express');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT ?? 5000;

config(app);

const start = () => {
  try {
    app.listen(PORT, () => console.log(`*** Шуршит маленький на пору ${PORT} ***`));
  } catch (e) {
    console.log(e);
  }
};
start();
