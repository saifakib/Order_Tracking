const { Schema, model } = require('mongoose')

const sellerProductSchema = new Schema({
    quantity: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    product_pic : String,
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    price: {
        type: Number,
        required: true
    },
}, {
        timestamps: true
    }
)

const SellerProduct = model('SellerProduct', sellerProductSchema)
module.exports = SellerProduct;