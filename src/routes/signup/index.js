const router = require('express').Router();
const { createTaxiCompanyOwner, createDispatcher } = require('../../controllers/signup.js');

router.post('/taxiCompanyOwner', createTaxiCompanyOwner);
router.post('/dispatcher', createDispatcher);

module.exports = router;
