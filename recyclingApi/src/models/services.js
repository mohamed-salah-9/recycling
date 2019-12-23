const mongoose = require('mongoose');
const validator = require('validator');

const ServicesSchema = new mongoose.Schema({
    services_name : {
        type: String,
       // required: true,
        trim: true,
    },
    services_details :{
        type: String,
        required: true,
        trim: true,
    }
})

const Service = mongoose.model('service' , ServicesSchema);
module.exports = Service ;