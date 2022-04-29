const cors = require('cors');

const corsConfig = {
  origin: process.env.CLIENT_URL,
  credential: true,
  optionsSuccessStatus: 200,
};

module.exports = corsConfig;
