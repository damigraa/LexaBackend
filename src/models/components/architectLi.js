const mongoose = require("mongoose")

const architectLiSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    miniTitle: {
        type: String,
        required: true,
    },
    descriptionOne: {
        type: String,
        required: true,
    },
    descriptionTwo: {
        type: String,
    },
    descriptionThree: {
        type: String,
    }, 
    mainImg: {
        type: String,
        required: true,
    },
}, { timestamps: true })




module.exports = mongoose.model("ArchitectLi", architectLiSchema)
