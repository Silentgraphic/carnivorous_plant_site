var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const Plant_info_schema = new Schema({
    title: { type: String, required: true },
    images: [String],
    plant_text: { type: String, required: true }
});

//Export model
module.exports = mongoose.model('plant_info', Plant_info_schema);