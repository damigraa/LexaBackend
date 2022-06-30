const mongoose = require("mongoose")

const paymentListSchema = new mongoose.Schema({

    title: {
        type: String,
        // required: true,
        min: 1,
        max: 30
    },
    description: {
        type: String,
        required: true,
        min: 1,
        max: 200
    },
    iconImg: {
        type: String,
    }
}, { timestamps: true })




module.exports = mongoose.model("PaymentList", paymentListSchema)
