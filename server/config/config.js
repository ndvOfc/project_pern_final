const express = require('express');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const configSession = require('./configSession');
const corsConfig = require('./corsConfig');

const config = (app) => {
  app.use(session(configSession));
  app.use(cors(corsConfig));
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};

module.exports = config;
