import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from "./src/database/db.js"

import bcrypt from "bcryptjs"
import User from './src/models/user.model.js'
import Shop from './src/models/shop.model.js'

import authRouter from './src/route/auth.routes.js'
import shopRouter from './src/route/shop.route.js'
import userRouter from './src/route/user.route.js'

const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())

connectDB()

const PORT = process.env.PORT || 3000

app.use('/auth', authRouter)
app.use('/shop', shopRouter)
app.use('/user', userRouter)


app.get('/all',async(req,res)=>{
    try {
        const shops = await Shop.find()
    res.status(200).json({
        message: "Fetched shops successfully",
        data: shops
    })
    } catch (error) {
        res.status(500).json({
            message: `Error : ${err}`
        })
    }
})

app.get('/users',async(req,res)=>{
    try{
        const users = await User.find()
    res.status(200).json({
        message: "Fetched users successfully",
        data: users
    })
    }
    catch (error) {
        res.status(500).json({
            message: `Error : ${err}`
        })
    }
})

app.listen(PORT,()=>{
    console.log("Server running on Port:",PORT)
})