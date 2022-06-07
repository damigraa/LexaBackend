const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        // required: true,
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




module.exports = mongoose.model("Blog", blogSchema)
