const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    minLength: 2,
    maxLength: 15,
    required: true,
  },
  model: {
    type: String,
    minLength: 1,
    maxLength: 15,
    required: true,
  },
  year: {
    type: Number,
    min: 1990,
    max: 2023,
    required: true,
  },
  licenseNumber: {
    type: String,
    minLength: 8,
    maxLength: 9,
    required: true,
    unique: true,
  },
  onLine: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('car', carSchema);
