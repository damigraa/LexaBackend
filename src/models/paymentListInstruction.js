const mongoose = require('mongoose');
const paymentLI = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        min: 1,
        max: 200
    }
}, { timestamps: true });


module.exports = mongoose.model('PaymentLI', paymentLI);