const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { dispatcherModel } = require('../../mongoose_models/desktopUsers.js');

const { NODE_ENV, SECRET_KEY } = process.env;

async function dispatcherSignIn(req, res, next) {
  const { login, password } = req.body;

  const dispatcher = await dispatcherModel.findOne({ login });
  try {
    bcrypt.compareSync(password, dispatcher.password);
    const token = jwt.sign({ _id: dispatcher._id }, SECRET_KEY);
    res.status(200).send({ token, message: 'Sign!' });
  } catch (err) {
    next(new Error('Логин или пароль не совпадают'));
  }
}

router.post('/dispatcher', dispatcherSignIn);

module.exports = router;
