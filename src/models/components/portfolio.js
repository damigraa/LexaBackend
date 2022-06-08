const mongoose = require("mongoose")

const portfolioSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    titleTwo: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        unique: true 
    },
    videoHref: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        max: 150
    },
    images: [
        {
            img: {
                type: String
            }
        }
    ]
}, { timestamps: true })




module.exports = mongoose.model("Portfolio", portfolioSchema)
