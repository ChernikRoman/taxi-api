const router = require('express').Router();
const { createTaxiOwner, createDispatcher } = require('../../controllers/signup.js');

router.post('/taxi-owner', createTaxiOwner);
router.post('/dispatcher', createDispatcher);

module.exports = router;
