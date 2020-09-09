var express = require('express');
var router = express.Router();

var index = require('../controllers/index_controller');

/* GET home page. */
router.get('/', index.index);

/*GET about page */
router.get('/about', index.about);

module.exports = router;
