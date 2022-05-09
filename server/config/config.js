const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('../passports/passport');
const configSession = require('./configSession');
const corsConfig = require('./corsConfig');

const config = (app) => {
  app.use(cors(corsConfig));
  app.use(cookieSession(configSession));

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(process.env.PWD, 'public')));

  // middleware
  // const isLoggedIn = (req, res, next) => {
  //   if (req.user) {
  //     next();
  //   } else {
  //     res.sendStatus(401);
  //   }
  // };

  // test passport js
  app.use(passport.initialize());
  app.use(passport.session());
};

module.exports = config;
