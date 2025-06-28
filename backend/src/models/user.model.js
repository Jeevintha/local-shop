import { Schema,model } from "mongoose";

const userSchema = Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    role :{
        enum: ['user','owner','admin'],
        type: String,
        default: 'user'
    },
    bookmark : [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    shop: {
        type : Schema.Types.ObjectId,
        ref: "Shop"
    },
    createdAt :{
        type: Date,
        default: Date.now()
    }
},{
    timestamps: true
})


 const User = model('User', userSchema)
 export default User