import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from "./src/database/db.js"

import bcrypt from "bcryptjs"
import User from './src/models/user.model.js'

const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())

connectDB()

const PORT = process.env.PORT || 3000


app.post('/login',async ( req, res )=>{
    const {phone,password} = req.body
    if(!phone || !password){
        res.status(400).json({
            message: "Phone or Password are required"
        })
    }

    const user = await User.findOne({
        phone : phone
    })
    if(!user){
        res.status(400).json({
            message: "user not found"
        })
    }

    const isAuthorized = await bcrypt.compare(password, user.password)

    if(!isAuthorized){
        res.status(400).json({
            messsage: "Invalid Credentials"
        })
    }
    res.status(200).json({
        message: "Login Successfull "
    })
})




app.post('/register', async(req,res)=>{
    const { username, password, phone } = req.body

    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = await User.create({
        username: username,
        password: hashedPassword,
        phone: phone
    })
    res.status(201).json({
        message: "User registration successful",
        user: newUser
    })
})



app.listen(PORT,()=>{
    console.log("Server running on Port:",PORT)
})