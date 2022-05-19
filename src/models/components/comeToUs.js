const mongoose = require("mongoose")

const comeToUsSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        min: 1,
        max: 30
    },
    description: {
        type: String,
        required: true,
        
        min: 20,
        max: 200
    },
    date: {
        type: Date,
    },
}, { timestamps: true })

module.exports = mongoose.model("ComeToUs", comeToUsSchema)