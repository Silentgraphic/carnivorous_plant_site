var express = require('express');
var router = express.Router();

const growing_cps = require('../controllers/growing_cps_controller');

router.get('/', growing_cps.growing_plants);

module.exports = router;