const mongoose = require('mongoose')

const headerSchema = new mongoose.Schema({
    nameSite: {
        type: String,
        required: true,
        min: 5,
        max: 20
    },
    numberOne: {
        type: String,
        required: true,
    },
    descriptionOne: {
        type: String,
        required: true,
        min: 11,
        max: 12
    },
    numberTwo: {
        type: String,
        required: true,
    },
    descriptionTwo: {
        type: String,
        required: true,
        min: 11,
        max: 12
    },
    mailName: {
        type: String,
        required: true,
    },
    mailDescription: {
        type: String,
        required: true,
        min: 8,
        max: 25
    }
}, { timestamps: true });

module.exports = mongoose.model("Header", headerSchema)