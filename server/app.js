require('dotenv').config();
const express = require('express');
const config = require('./config/config');
const router = require('./routes/mainRouter');

const app = express();
const PORT = process.env.PORT ?? 5001;

config(app);

app.use('/api', router);

const start = () => {
  try {
    app.listen(PORT, () => console.log(`*** Шуршит маленький на пору ${PORT} ***`));
  } catch (e) {
    console.log(e);
  }
};
start();
