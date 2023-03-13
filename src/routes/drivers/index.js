const router = require('express').Router();
const {
  createDriver,
  getDrivers,
  getDriverById,
  patchDriver,
} = require('../../controllers/drivers.js');

router.post('/', createDriver);
router.get('/', getDrivers);
router.get('/:id', getDriverById);
router.patch('/:id', patchDriver);

module.exports = router;
