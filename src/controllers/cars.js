const carModel = require('../mongoose_models/car.js');

async function createCar(req, res, next) {
  try {
    const car = await carModel.create(req.body);
    res.status(201).send({ id: car._id });
  } catch (err) {
    next(new Error(err.message));
  }
}

async function getCars(req, res, next) {
  try {
    const cars = await carModel
      .find()
      .select('-__v')
      .lean();

    res.status(200).send({ data: cars });
  } catch (err) {
    next(new Error(err.message));
  }
}

async function getCarById(req, res, next) {
  try {
    const car = await carModel
      .findById(req.params.id)
      .select('-__v')
      .orFail(() => next(new Error('Document not found')));

    res.status(200).send({ data: car });
  } catch (err) {
    next(new Error(err.message));
  }
}

async function patchCar(req, res, next) {
  try {
    const car = await carModel
      .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
      .select('-__v')
      .orFail(() => next(new Error('Document not found')));

    res.status(200).send({ data: car });
  } catch (err) {
    next(new Error(err.message));
  }
}

async function deleteCar(req, res, next) {
  try {
    const car = await carModel
      .findByIdAndRemove(req.params.id)
      .orFail(() => next(new Error('Document not found')));

    res.status(200).send({ data: { id: car._id } });
  } catch (err) {
    next(new Error(err.message));
  }
}

module.exports = {
  createCar,
  getCars,
  getCarById,
  patchCar,
  deleteCar,
};
