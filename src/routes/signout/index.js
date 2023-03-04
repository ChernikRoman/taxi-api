const router = require('express').Router();
const desktopSignOut = require('../../controllers/signout.js');

router.get('/', desktopSignOut);

module.exports = router;
