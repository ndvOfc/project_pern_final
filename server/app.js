require('dotenv').config();
const express = require('express');
const config = require('./config/config');
const router = require('./routes/mainRouter');
const sequelize = require('./db/db');

const app = express();
const PORT = process.env.PORT ?? 5001;

config(app);

app.use('/api', router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    // await sequelize.sync({ force: true });
    app.listen(PORT, () => console.log(`*** Шуршит маленький на пору ${PORT} ***`));
  } catch (e) {
    console.log(e);
  }
};
start();
