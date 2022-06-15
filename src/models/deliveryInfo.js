const mongoose = require('mongoose');
const deliveryInfo = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 1,
        max: 50
    },
    description: {
        type: String,
        require: true,
        min: 1,
        max: 500
    },
    deliveryTime: {
        type: String,
        require: true,
        min: 1,
        max: 20
    },

}, { timestamps: true });


module.exports = mongoose.model('DeliveryInfo', deliveryInfo);