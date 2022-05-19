const mongoose = require('mongoose');
const mainImageSchema = new mongoose.Schema({
    header: {
        type: String,
        // required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    descriptionButton: {
        type: String,
        // required: true,
    },
    image: {
        type: String
    },
    buttonText: {
        type: String,
        // required: true
    }
}, { timestamps: true });


module.exports = mongoose.model('MainImage', mainImageSchema);