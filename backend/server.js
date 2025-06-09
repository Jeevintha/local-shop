import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express()
dotenv.config()
app.use(cors({
    origin: ["http//:localhost:5173"]
    
}))

app.get('/',(req,res)=>{
    res.status(200).json({
        message : "api is working"
    })
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})