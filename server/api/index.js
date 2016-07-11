var express = require('express');
var router = express.Router();

require('dotenv').config();

router.use('/musicians', require('./musicians'))
router.use('/events', require('./events'))
router.use('/mailgun', require('./mailgun'))


module.exports = router;
