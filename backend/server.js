import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from "./src/database/db.js"

const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())

connectDB()

const PORT = process.env.PORT || 3000



app.listen(PORT,()=>{
    console.log("Server running on Port:",PORT)
})