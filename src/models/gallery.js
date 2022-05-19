const mongoose = require('mongoose');
const gallerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
    },
    slug: {
        type: String,
        // required: true,
        unique: true
    },
    galleryPictures: [
        { img: { type: String } }
    ],
    updatedAt: Date,

}, { timestamps: true });


module.exports = mongoose.model('Gallery', gallerySchema);