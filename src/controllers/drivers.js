const bcrypt = require('bcrypt');
const driverModel = require('../mongoose_models/driver.js');

function createDriver(req, res, next) {
  req.body.auth.password = bcrypt.hashSync(req.body.auth.password, 10);

  driverModel
    .create({ ...req.body })
    .then((driver) => {
      res.status(201).send({ data: { _id: driver._id } });
    })
    .catch((err) => next(new Error(err.message)));
}

async function getDrivers(req, res, next) {
  try {
    const drivers = await driverModel
      .find({})
      .populate({ path: 'info.car', select: '-__v' })
      .select('-auth -__v')
      .orFail(() => next(new Error('Document not found')));

    res.status(200).send({ data: drivers });
  } catch (err) {
    next(new Error(err.message));
  }
}

async function getDriverById(req, res, next) {
  try {
    const driver = await driverModel
      .findById(req.params.id)
      .populate({ path: 'info.car', select: '-__v' })
      .select('-auth -__v')
      .orFail(() => next(new Error('Document not found')));

    res.status(200).send({ data: driver });
  } catch (err) {
    next(new Error(err.message));
  }
}

async function patchDriver(req, res, next) {
  try {
    if (req.body?.auth?.password) {
      req.body.auth.password = bcrypt.hashSync(req.body.auth.password, 10);
    }

    const driver = await driverModel
      .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
      .populate({ path: 'info.car', select: '-__v' })
      .select('-auth -__v')
      .orFail(() => next(new Error('Document not found')));

    res.status(200).send({ data: driver });
  } catch (err) {
    next(new Error(err.message));
  }
}

async function deleteDriver(req, res, next) {
  try {
    const driver = await driverModel
      .findByIdAndRemove(req.params.id)
      .orFail(() => next(new Error('Document not found')));

    res.status(200).send({ data: { id: driver._id } });
  } catch (err) {
    next(new Error(err.message));
  }
}

module.exports = {
  createDriver,
  getDrivers,
  getDriverById,
  patchDriver,
  deleteDriver,
};
