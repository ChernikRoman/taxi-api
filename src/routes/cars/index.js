const router = require('express').Router();
const {
  createCar,
  getCars,
  getCarById,
  patchCar,
  deleteCar,
} = require('../../controllers/cars.js');

router.post('/', createCar);
router.get('/', getCars);
router.get('/:id', getCarById);
router.patch('/:id', patchCar);
router.delete('/:id', deleteCar);

module.exports = router;
