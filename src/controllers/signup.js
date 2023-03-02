const bcrypt = require('bcrypt');
const { taxiOwnerModel, dispatcherModel } = require('../mongoose_models/desktopUsers.js');

function createTaxiOwner(req, res, next) {
  const {
    firstName, lastName, role, login, password,
  } = req.body;

  taxiOwnerModel.create({
    firstName, lastName, role, login, password: bcrypt.hashSync(password, 10),
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

module.exports = { createTaxiOwner, createDispatcher };
