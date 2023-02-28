/* eslint-disable max-classes-per-file */
const mongoose = require('mongoose');

class DesktopUser {
  firstName = {
    type: String,
    minLength: 3,
    maxLength: 15,
    required: true,
  };

  lastName = {
    type: String,
    minLength: 3,
    maxLength: 15,
    required: true,
  };

  password = {
    type: String,
    minLength: 8,
    required: true,
    select: false,
  };
}

class TaxiCompanyOwner extends DesktopUser {
  phone = {
    type: String,
    minLength: 12,
    maxLength: 12,
    required: true,
    unique: true,
  };

  role = {
    type: String,
    enum: ['taxiCompanyOwner'],
    required: true,
  };
}

class Dispatcher extends DesktopUser {
  login = {
    type: String,
    minLength: 5,
    maxLength: 25,
    required: true,
    unique: true,
  };

  role = {
    type: String,
    enum: ['dispatcher'],
    required: true,
  };
}

const taxiCompanyOwnerSchema = new mongoose.Schema(new TaxiCompanyOwner());
const dispatcherSchema = new mongoose.Schema(new Dispatcher());

module.exports = {
  taxiCompanyOwnerModel: mongoose.model('taxiCompanyOwner', taxiCompanyOwnerSchema),
  dispatcherModel: mongoose.model('dispatcher', dispatcherSchema),
};
