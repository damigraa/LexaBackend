const mongoose = require('mongoose');
const manufactureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 30
    },
    description: {
        type: String,
        required: true,
        max: 60

    },
    iconImg: {
        type: String,
        require: true
    }
}, { timestamps: true });


module.exports = mongoose.model('Manufacture', manufactureSchema);