var express = require('express');
var router = express.Router();

const plants = require('../controllers/cp_plants_controller');

router.get('/', plants.plants);

module.exports = router;