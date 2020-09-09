var express = require('express');
var router = express.Router();

/*GET plants page*/
const plants = require('../controllers/cp_plants_controller');

router.get('/', plants.plants_home);

module.exports = router;