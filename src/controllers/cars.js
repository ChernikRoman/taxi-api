const carModel = require('../mongoose_models/car.js');

async function createCar(req, res, next) {
  carModel.create(req.body, (err, car) => {
    if (err) {
      next(new Error(err.message));
    } else {
      res.status(201).send({ id: car._id });
    }
  });
}

module.exports = createCar;
