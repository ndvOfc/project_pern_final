/* eslint-disable */
// noinspection JSUnusedLocalSymbols
// eslint-disable-next-line import/no-unresolved

require("dotenv").config();

const sequelize = require("../db");
const { User } = require("../models/models");

module.exports = {
  // sync database
  syncDb: async () => await sequelize.sync(),

  // force sync database (! destroy all data in tables)
  syncDbForce: async () => await sequelize.sync({ force: true }),

  // no comments)))
  dropDb: async () => await sequelize.drop(),

  // seeder (you can choose quantity in script)
  // seedDb: async (amount) => {
  //   while (amount--) {
  //     await Worker.create({
  //       name: randFullName(),
  //       email: randEmail(),
  //       phone: randPhoneNumber(),
  //       isCandidate: true,
  //       isHired: false,
  //     });
  //   }
  // },
};
// !necessary for running functions separately
require("make-runnable");
