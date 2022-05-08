const cors = require('cors');

const corsConfig = {
  origin: process.env.CLIENT_URL,
  // methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsConfig;
// console.log(corsConfig.origin);
