var express = require('express');
var router = express.Router();

const plants = require('../controllers/cp_plants_controller');

/*GET plants home page*/
router.get('/', plants.plants_home);

/*GET plant info page*/
router.get('/:plant_name', plants.plants_info );

module.exports = router;