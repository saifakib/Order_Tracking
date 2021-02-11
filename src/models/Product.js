const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    step: {                 //minimum 3 step 
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    cost: {
        type: Number,
        required: true
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    sellar: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
        timestamps: true
    }
)

const Product = model('Product', productSchema)
module.exports = Product;