const router = require('express').Router();
const { getDriver, createDriver } = require('../../controllers/drivers.js');

router.get('/', getDriver);
router.post('/', createDriver);

module.exports = router;
