const router = require('express').Router();
const signUpRouter = require('./signup/index.js');
const signInRouter = require('./signin/index.js');
const signOutRouter = require('./signout/index.js');

router.use('/signup', signUpRouter);
router.use('/signin', signInRouter);
router.use('/signout', signOutRouter);

module.exports = router;
