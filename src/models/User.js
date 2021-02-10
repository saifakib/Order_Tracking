const { Schema, model } = require('mongoose')
const valid = require('validator');

const userSchema = new Schema({
    type: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate: {
            validator: (v) => {
                return valid.isValid(v)
            },
            message: "${v} is not valid email"
        }
    },
    password: {
        type: String,
        required: true
    },
    products : [
        {
            type : Schema.Types.ObjectId,
            ref : 'Product '
        }
    ]
}, {
        timestamps: true
    }
)

const User = model('User', userSchema)
module.exports = User;