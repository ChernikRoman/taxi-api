const router = require('express').Router();
const { createCar, getCars } = require('../../controllers/cars.js');

router.post('/', createCar);
router.get('/', getCars);

module.exports = router;
