const express = require('express');
const cors = require('cors');
const path = require('path');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
// const passportConfig = require('../passport');
require('../passport');
const configSession = require('./configSession');
// const corsConfig = require('./corsConfig');

const config = (app) => {
  app.use(session(configSession));
  app.use(cors({
    origin: process.env.CLIENT_URL,
    credential: true,
    optionsSuccessStatus: 200,
  }));
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(process.env.PWD, 'public')));

  // test passport js
  app.use(passport.initialize());
  app.use(passport.session());
};

module.exports = config;
