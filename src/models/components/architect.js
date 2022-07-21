const mongoose = require("mongoose")

const architectSchema = new mongoose.Schema({

    headerTitle: {
        type: String,
        required: true,
    },
    textImage: {
        type: String,
        required: true,
    },
    contentTextLeft: {
        type: String,
        required: true,
    },
    contentTitle: {
        type: String,
        required: true,
    },
    contentDescription: {
        type: String,
        required: true,
    },
    mainImg: {
        type: String,
        required: true,
    },
}, { timestamps: true })




module.exports = mongoose.model("Architect", architectSchema)
