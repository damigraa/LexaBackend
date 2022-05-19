const mongoose = require('mongoose');


const productPriceSchema = new mongoose.Schema({
    newPrice: {
        type: String,
        default: "20000"
    },
    size: {
        type: String,
        default: "1000x500x60"
    },

})
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        // required: true,
        unique: true
    },
    price: {
        type: Number,
        // required: true
    },
    quantity: {
        type: Number,
        // required: true
    },
    description: {
        type: String,
        // required: true,
        trim: true
    },
    size: {
        type: String,
        // required: true,
        trim: true
    },
    weight: {
        type: String,
        // required: true,
        trim: true
    },
    offer: { type: Number },
    productPrice: [productPriceSchema],
    productPictures: [ 
        {
            img: {
                type: String,
                required: true,
            }
        }
    ],
    reviews: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            review: String
        }
    ],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    updatedAt: Date,

}, { timestamps: true });

mongoose.model('ProductPrice', productPriceSchema);
module.exports = mongoose.model('Product', productSchema);