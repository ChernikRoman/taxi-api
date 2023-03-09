const router = require('express').Router();
const { createTaxiCompanyes } = require('../../controllers/taxiCompanyes.js');

router.post('/', createTaxiCompanyes);

module.exports = router;
