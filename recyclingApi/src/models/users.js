const mongoose = require('mongoose');
const validator = require('validator');


const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    phone:{
        type: Number,
        required: true,
        trim: true,
    },
    address:{
        type: String,
        required: true,
        trim: true,
    },
    product_Type :{
        type: String,
        trim: true,
    },
    product_weight :{
        type: Number,
        trim: true,
    },
    details:{
        type: String,
        trim: true,
    }
})

const User = mongoose.model('User' , UserSchema);
module.exports = User ; 