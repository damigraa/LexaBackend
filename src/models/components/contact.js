const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        min: 1,
        max: 30
    },
    href: { 
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        min: 1,
        max: 150
    },
    iconImg: {
        type: String,
        // required: true,
    }
}, { timestamps: true })




module.exports = mongoose.model("Contact", contactSchema)
