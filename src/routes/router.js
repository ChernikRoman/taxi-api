const router = require('express').Router();
const signUpRouting = require('./signup/index.js');
const signInRouting = require('./signin/index.js');

router.use('/signup', signUpRouting);
router.use('/signin', signInRouting);

module.exports = router;
