const mongoose = require('mongoose');

const taxiRideSchema = new mongoose.Schema({
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'awaiableSitie',
    required: true,
  },
  applicationTime: {
    type: Date,
    required: true,
  },
  acceptTime: {
    type: Date,
    required: true,
  },
  onStartPoint: {
    type: Date,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  finishTime: {
    type: Date,
    required: true,
  },
  taxiCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'taxiCompanye',
    required: true,
  },
  tariff: {
    type: String,
    enum: ['regular'],
    required: true,
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'driver',
    required: true,
  },
  passanger: {
    type: mongoose.Schema.Types.ObjectId,
    ref: '',
    required: true,
  },
  price: {
    type: Number,
    requred: true,
  },
});

module.exports = mongoose.model('taxiRide', taxiRideSchema);
