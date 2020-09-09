exports.plants_home = (req, res) => {
    res.render('cp_plants_home');
};

exports.plants_info =(req,res) => {
    res.render('plant_info_layout', {plant_name: req.params.plant_name});
};