const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { dispatcherModel } = require('../../mongoose_models/desktopUsers.js');

const { SECRET_KEY } = process.env;

async function dispatcherSignIn(req, res, next) {
  const { login, password } = req.body;

  const dispatcher = await dispatcherModel.findOne({ login }).select('+password').lean();
  try {
    bcrypt.compareSync(password, dispatcher.password);

    const token = jwt.sign(dispatcher, SECRET_KEY, { expiresIn: '7d' });
    res.cookie('jwt', token, {
      maxAge: 3600000 * 24 * 7,
      httpOnly: true,
      sameSite: true,
    });
    res.status(200).send({
      firstName: dispatcher.firstName,
      lastName: dispatcher.lastName,
      login: dispatcher.login,
      role: dispatcher.role,
    });
  } catch (err) {
    next(new Error('Логин или пароль не совпадают'));
  }
}

router.post('/dispatcher', dispatcherSignIn);

module.exports = router;
