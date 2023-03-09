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

class TaxiOwner extends DesktopUser {
  login = {
    type: String,
    minLength: 12,
    maxLength: 12,
    required: true,
    unique: true,
  };

  role = {
    type: String,
    enum: ['taxiOwner'],
    required: true,
  };

  taxiCompany = {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'taxiCompanye',
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

const taxiOwnerSchema = new mongoose.Schema(new TaxiOwner());
const dispatcherSchema = new mongoose.Schema(new Dispatcher());

module.exports = {
  taxiOwnerModel: mongoose.model('taxiOwner', taxiOwnerSchema),
  dispatcherModel: mongoose.model('dispatcher', dispatcherSchema),
};
