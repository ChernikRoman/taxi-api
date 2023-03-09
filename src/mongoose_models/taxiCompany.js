const mongoose = require('mongoose');

const taxiCompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  businessForm: {
    type: String,
    enum: ['ООО', 'ИП'],
    required: true,
  },
  adress: {
    type: String,
    minLength: 10,
    maxLength: 150,
    required: true,
  },
  ceo: {
    type: String,
    minLength: 10,
    maxLength: 50,
    required: true,
  },
  drivers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'drivers',
  },
  cars: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'cars',
  },
});

module.exports = mongoose.model('taxiCompanye', taxiCompanySchema);
