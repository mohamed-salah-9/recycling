const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');


const AdminSchema = new mongoose.Schema({
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
    email: {
        type:String,
        unique: true,
        required:true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true
    },
    age : {
        type: Number,
        default: 0
    },
    tokens : [{
        token : {
        type: String,
        required: true
        }
    }],
    type_ :  {
        type : Number,
        required : true
    },
    status : {
        type : Boolean ,
        required : true ,
       default : false
    }
})

AdminSchema.methods.generateAuthToken = async function(){
    const admin = this;
    const token = jwt.sign({_id:admin._id.toString()} , 'mytoken');
    admin.tokens = admin.tokens.concat({token})
    await admin.save()
    return token
}



AdminSchema.statics.findByCredentials = async (email , password)=>{
    const admin = await Admin.findOne({email})
    if(!admin){
        throw new Error('user not found')
    }
    const isMatch = await bcrypt.compare(password , admin.password)
    if(!isMatch){
        throw new Error ('password error')
    }
    

    return admin
}

AdminSchema.pre('save' , async function(next){
    const admin = this;
    if(admin.isModified('password'))
      admin.password = await bcrypt.hash(admin.password , 9)
    next()
})


const Admin = mongoose.model('Admins' , AdminSchema);
module.exports = Admin ; 