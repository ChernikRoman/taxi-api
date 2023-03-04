const router = require('express').Router();
const desktopSignIn = require('../../controllers/signin.js');

router.post('/desktop', desktopSignIn);

module.exports = router;
