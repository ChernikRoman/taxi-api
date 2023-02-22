const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minLength: 3,
    maxLength: 15,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 3,
    maxLength: 15,
    required: true,
  },
  login: {
    type: String,
    minLength: 3,
    maxLength: 15,
    required: true,
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
    select: false,
  },
  phone: {
    type: String,
    minLength: 8,
    maxLength: 15,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('user', userSchema);
