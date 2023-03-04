const router = require('express').Router();
const desktopSignUp = require('../../controllers/signup.js');

router.post('/desktop', desktopSignUp);

module.exports = router;
