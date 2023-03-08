const bcrypt = require('bcrypt');
const driverModel = require('../mongoose_models/driver.js');

function getDriver(req, res, next) {
  driverModel.findById(req.query.id, (err, data) => {
    if (err) {
      next(new Error(err.message));
    } else {
      const driver = {
        id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        car: {
          id: data.car._id,
          make: data.car.make,
          model: data.car.model,
          year: data.car.year,
          licenseNumber: data.car.licenseNumber,
        },
      };

      res.status(200).send(driver);
    }
  }).populate('car');
}

function createDriver(req, res, next) {
  const regData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    car: req.body.car,
    login: req.body.login,
    password: bcrypt.hashSync(req.body.password, 10),
  };

  driverModel.create(regData, (err, driver) => {
    if (err) {
      next(new Error(err.message));
    } else {
      res.status(201).send({ id: driver._id });
    }
  });
}

module.exports = { getDriver, createDriver };
