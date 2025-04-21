import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    phone : {
        type : Number,
        required : true,
        unique : true
    },
    address : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        unique : true
    },
    role : {
        type: String,
        default: 'user',
        enum: ['user','admin','shopOwner']
    },
    createdAt :{
        type: Date,
        default: Date.now
    }

})

const User = new mongoose.model('User', userSchema);

export default User