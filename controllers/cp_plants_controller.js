const PlantModel = require('../models/plant_info');
const createError = require('http-errors');

const { param } = require("express-validator");
const { create } = require('../models/plant_info');

function plants_info_database_callback(err, plant, next) {
    if (err) throw err;
    if (plant === null) throw new Error('No plant named that');
}

exports.plants_home = (req, res, next) => {
    res.render('cp_plants_home');
};

exports.plants_info = [
    //Escape plant name
    param('plant_name')
        .escape()
    ,
    //Database call
    (req, res, next) => {
        PlantModel.findOne({ title: req.params.plant_name },
            (err, plant) => {
                try {
                    plants_info_database_callback(err, plant, next);
                    next();
                } catch (error) {
                    if (error.message == 'No plant named that') return next(createError(404));
                    else return next(error);
                }
            }
        );
    },
    //Proccess request
    (req, res, next) => {
        res.render('plant_info_layout', { plant_name: req.params.plant_name });
    }
];