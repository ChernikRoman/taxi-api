const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  info: {
    firstName: {
      type: String,
      minLength: 3,
      maxLength: 15,
      require: true,
    },
    lastName: {
      type: String,
      minLength: 3,
      maxLength: 15,
      require: true,
    },
    role: {
      type: String,
      enum: ['driver'],
      default: 'driver',
      require: true,
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'car',
    },
  },
  auth: {
    login: {
      type: String,
      minLength: 12,
      maxLength: 12,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      minLength: 8,
      require: true,
      selected: true,
    },
  },
});

module.exports = mongoose.model('driver', driverSchema);
