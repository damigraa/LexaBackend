const mongoose = require('mongoose');
const costDelivery = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        min: 1,
        max: 200
    },
    price: {
        type: String,
        require: true,
        min: 1,
        max: 20
    },
    deliveryTime: {
        type: String,
        require: true,
        min: 1,
        max: 20
    }

}, { timestamps: true });


module.exports = mongoose.model('CostDelivery', costDelivery);