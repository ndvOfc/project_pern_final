const session = require('express-session');
// const FileStore = require('session-file-store')(session);

const sessionConfig = {
  // store: new FileStore(),
  name: 'user_sid',
  secret: process.env.SESSION_KEY ?? 'jaga',
  resave: false,
  saveUninitialized: false,
  cookie: {
    // вариант с путем
    path: '/',
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },

  // keys: [process.env.SESSION_KEY ?? 'jaga'],

  // // Cookie Options
  // maxAge: 24 * 60 * 60 * 1000, // 24 hours
};

module.exports = sessionConfig;
