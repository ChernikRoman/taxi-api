const router = require('express').Router();
const signUpRouter = require('./signup/index.js');
const signInRouter = require('./signin/index.js');
const signOutRouter = require('./signout/index.js');
const carsRouter = require('./cars/index.js');
const driversRouter = require('./drivers/index.js');

router.use('/signup', signUpRouter);
router.use('/signin', signInRouter);

// Protected routes
router.use('/drivers', driversRouter);
router.use('/cars', carsRouter);
router.use('/signout', signOutRouter);

module.exports = router;
