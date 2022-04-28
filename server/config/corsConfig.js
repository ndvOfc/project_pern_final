const cors = require('cors');

const corsConfig = {
  origin: ['http://localhost:5000'],
  credential: true,
  optionsSuccessStatus: 200,
};

module.exports = corsConfig;
