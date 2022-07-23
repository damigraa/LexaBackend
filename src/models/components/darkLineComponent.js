const mongoose = require("mongoose")

const darkLineComponentSchema = new mongoose.Schema({

    titleOne: {
        type: String,
        required: true,
    },
    titleTwo: {
        type: String,
        required: true,
    },
    descriptionOne: {
        type: String,
    },
    descriptionTwo: {
        type: String,
    },
}, { timestamps: true })




module.exports = mongoose.model("DarkLineComponent", darkLineComponentSchema)
