const PlantModel = require('../models/plant_info');

exports.plants_home = (req, res, next) => {
    res.render('cp_plants_home');
};

exports.plants_info = (req, res, next) => {
    PlantModel.findOne({title:'Sarracenia'})
        .exec(function (err, plant) {
            if (err) return next(err);
        });

    res.render('plant_info_layout', { plant_name: req.params.plant_name });
};