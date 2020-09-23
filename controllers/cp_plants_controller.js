const PlantModel = require('../models/plant_info');

const { param } = require("express-validator");

function plants_info_database_callback(err, plant) {
    if (err) return next(err);
}

exports.plants_home = (req, res, next) => {
    res.render('cp_plants_home');
};

exports.plants_info = async (req, res, next) => {
    //Escape plant name
    await param('plant_name').escape().run(req);
    
    PlantModel.findOne({ title: req.params.plant_name }, plants_info_database_callback);
    
    res.render('plant_info_layout', { plant_name: req.params.plant_name });
};