const PlantModel = require('../models/plant_info');
const createError = require('http-errors');

const { param } = require("express-validator");
const { create } = require('../models/plant_info');

let render_info = null;

function set_render_info(info) {
    render_info = info;
    render_info.title = render_info.title.charAt(0).toUpperCase() + render_info.title.slice(1);
}

function plants_info_database_callback(err, plant) {
    if (err) throw err;
    if (plant === null) throw new Error('No plant named that');
    else set_render_info(plant);
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
                    plants_info_database_callback(err, plant);
                    next();
                } catch (error) {
                    if (error.message == 'No plant named that') return next(createError(404));
                    else return next(error);
                }
            }
        );
    },
    //Render response
    (req, res) => {
        res.render('plant_info_layout', {
            title: render_info.title,
            plant_name: render_info.title,
            plant_text: render_info.plant_text,
            plant_image: render_info.images
        });
    }
];