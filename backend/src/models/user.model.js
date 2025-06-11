import { Schema,model } from "mongoose";

const userSchema = Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    shop: {
        type : Schema.type.ObjectId,
        ref: "shop",
        required: true
    }
})


export const User = model('User', userSchema)