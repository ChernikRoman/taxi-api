const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
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
    require: true,
  },
  cars: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'car',
  },
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
});

mongoose.model('driver', driverSchema);
