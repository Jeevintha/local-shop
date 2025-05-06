import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config()

const DB_Url = process.env.MONGO_URI

function connectDB(){

    mongoose.connect(DB_Url)
    .then((data)=>{
        console.log("Mongodb Connected -", data.connection.name)
    })
    .catch((err)=>{
        console.log("error",err)
    })

}

export default connectDB