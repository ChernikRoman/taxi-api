const bcrypt = require('bcrypt');
const { taxiOwnerModel, dispatcherModel } = require('../mongoose_models/desktopUsers.js');

function desktopSignUp(req, res, next) {
  const {
    firstName, lastName, role, login, password,
  } = req.body;

  let dbModel;

  switch (role) {
    case 'taxiOwner':
      dbModel = taxiOwnerModel;
      break;
    case 'dispatcher':
      dbModel = dispatcherModel;
      break;
    default:
  }

  if (dbModel) {
    dbModel.create({
      firstName, lastName, role, login, password: bcrypt.hashSync(password, 10),
    })
      .then(() => res.status(201).end())
      .catch((err) => next(new Error(err.message)));
  } else {
    next(new Error('Роль не указана'));
  }
}

module.exports = desktopSignUp;
