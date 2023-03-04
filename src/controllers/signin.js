const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { dispatcherModel, taxiOwnerModel } = require('../mongoose_models/desktopUsers.js');

const { SECRET_KEY } = process.env;

function desktopSignIn(req, res, next) {
  const { login, password, role } = req.body;

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
    dbModel.findOne({ login }).select('+password').lean()
      .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = jwt.sign(user, SECRET_KEY, { expiresIn: '7d' });
          res.cookie('jwt', token, {
            maxAge: 3600000 * 24 * 7,
            httpOnly: true,
            sameSite: true,
          });
          res.status(200).send({
            firstName: user.firstName,
            lastName: user.lastName,
            login: user.login,
            role: user.role,
          });
        } else {
          next(new Error('Логин или пароль введены неверно'));
        }
      });
  } else {
    next(new Error('Роль не указана'));
  }
}

module.exports = desktopSignIn;
