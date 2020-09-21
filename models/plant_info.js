import mongoose from 'mongoose';
const { Schema } = mongoose;

const Plant_info_schema = new Schema({
    title: { type: String, required: true },
    images: [string],
    plant_text: { type: String, required: true }
});

//Export model
module.exports = mongoose.model('book_info', Plant_info_schema);