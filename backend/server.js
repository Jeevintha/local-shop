import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from "./src/database/db.js"


import authRouter from './src/route/auth.route.js'
import shopRouter from './src/route/shop.route.js'
import userRouter from './src/route/user.route.js'
import productRouter from './src/route/product.route.js'

const app = express()
app.use(express.json())
dotenv.config()
app.use(cors({
    origin : process.env.FRONTEND_URL
}))

connectDB()

const PORT = process.env.PORT || 3000

app.use('/auth', authRouter)
app.use('/shop', shopRouter)
app.use('/user', userRouter)
app.use('/product', productRouter)


app.listen(PORT,()=>{
    console.log("Server running on Port:",PORT)
})