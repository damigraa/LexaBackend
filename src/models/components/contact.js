const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({

    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    cityIndex: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    numberTwo: {
        type: String,
        required: true,
    }
}, { timestamps: true })




module.exports = mongoose.model("Contact", contactSchema)
