var express = require('express');
var router = express.Router();


router.use('/musicians', require('./musicians'))
router.use('/events', require('./events'))


module.exports = router;
