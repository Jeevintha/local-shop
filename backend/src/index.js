import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js'
import connectDB from './database/db.js';

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json());

connectDB()

app.use("/auth", authRoutes)


app.listen(PORT,()=>{
    console.log("Server is running on port -",PORT)
})

