const mongoose = require("mongoose")

const promotionsSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        min: 1,
        max: 30
    },
    iconImg: {
        type: String
    }, 
    description: {
        type: String,
        required: true,
        min: 1,
        max: 150
    },
}, { timestamps: true })




module.exports = mongoose.model("Promotion", promotionsSchema)
