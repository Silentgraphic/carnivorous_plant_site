var express = require('express');
var router = express.Router();

const growing_cps = require('../controllers/growing_cps_controller');

/*GET growing plants page*/
router.get('/', growing_cps.growing_plants);

/*GET enviroment page */
router.get('/enviroment',growing_cps.enviroment);

/*GET propagation page*/
router.get('/propagation', growing_cps.propagation);

/*GET soils page*/
router.get('/soils', growing_cps.soils);

/*GET water page*/
router.get('/water', growing_cps.water);

/*GET light page*/
router.get('/light', growing_cps.light);

/*GET feeding page*/
router.get('/feeding', growing_cps.feeding);

/*GET pests page*/
router.get('/pests', growing_cps.pests);

module.exports = router;