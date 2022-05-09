const corsConfig = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsConfig;
