const taxiCompanyesModel = require('../mongoose_models/taxiCompany.js');
const { taxiOwnerModel } = require('../mongoose_models/desktopUsers.js');

function createTaxiCompanyes(req, res, next) {
  const regData = {
    companyName: req.body.companyName,
    businessForm: req.body.businessForm,
    adress: req.body.adress,
    ceo: req.body.ceo,
  };

  taxiCompanyesModel.create(regData, (err, taxiCompany) => {
    if (err) {
      next(new Error(err.message));
    } else {
      taxiOwnerModel.findByIdAndUpdate('640371afbc4bf6b2fa7470ea', { taxiCompany: taxiCompany._id })
        .then(() => {
          res.status(201).send({ id: taxiCompany._id });
        });
    }
  });
}

module.exports = {
  createTaxiCompanyes,
};
