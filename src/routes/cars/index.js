const router = require('express').Router();
const createCar = require('../../controllers/cars.js');

router.post('/', createCar);

module.exports = router;
