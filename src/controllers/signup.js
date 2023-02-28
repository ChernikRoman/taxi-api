const bcrypt = require('bcrypt');
const { taxiCompanyOwnerModel, dispatcherModel } = require('../mongoose_models/desktopUsers.js');

function createTaxiCompanyOwner(req, res, next) {
  const {
    firstName, lastName, role, phone, password,
  } = req.body;

  taxiCompanyOwnerModel.create({
    firstName, lastName, role, phone, password: bcrypt.hashSync(password, 10),
  })
    .then(() => res.status(201).end())
    .catch((err) => next(new Error(err.message)));
}

function createDispatcher(req, res, next) {
  const {
    firstName, lastName, role, login, password,
  } = req.body;

  dispatcherModel.create({
    firstName, lastName, role, login, password: bcrypt.hashSync(password, 10),
  })
    .then(() => res.status(201).end())
    .catch((err) => next(new Error(err.message)));
}

module.exports = { createTaxiCompanyOwner, createDispatcher };
