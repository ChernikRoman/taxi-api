const router = require('express').Router();
const signUpRouting = require('./signup/index.js');

router.use('/signup', signUpRouting);

module.exports = router;
