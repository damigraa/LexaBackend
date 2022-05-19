const mongoose = require("mongoose")

const weWorkOnlineSchema = new mongoose.Schema({
    stage: {
        type: String,
        default: "ЭТАП"
    },
    title: {
        type: String,
        required: true,
    },
    description: [String],
    buttonText: {
        type: String,
        required: true,
    },
    buttonHref: {
        type: String,
        required: true,
    }, 
    image: {
        type: String,
        // required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
}, { timestamps: true })

module.exports = mongoose.model("WeWorkOnline", weWorkOnlineSchema)