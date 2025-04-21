import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import User from './models/userModel.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000
const DB_Url = process.env.MONGO_URI

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json());

mongoose.connect(DB_Url)
.then((data)=>{
    console.log("Mongodb Connected -", data.connection.name)
})
.catch((err)=>{
    console.log("error",err)
})



app.get('/test',(req,res)=>{
    res.send("backend server")
})

app.post('/auth/register', async (req,res)=>{
    const payload = req.body
    console.log(req.body)

    const salt = await bcrypt.genSalt(10)
     const hashedPass = await bcrypt.hash(payload.password,salt)

    const newUser = new User({
        name : payload.name,
        phone : payload.phone,
        address : payload.address,
        email : payload.email,
        password : hashedPass,
        role : payload.role
    })
    await newUser.save()
    .then(()=>{
        res.json({"msg" : "Registration Successful"})
    })
    .catch((err)=>{
            console.log("error - ",err)
            res.json({"msg" : "Registration error"})
    })
})

app.post("/auth/login", async(req,res)=>{
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({
            message : "Missing Credential"
        })
    }

    const user = await User.findOne({email})

    if(!user){
        return res.status(400).json({
            message : "Invalid Credential"
        })
    }

    const match = await bcrypt.compare(user.password, password)

    if(!match){
        return res.status(400).json({
            message : "Invalid Credential"
        })
    }

    res.status(200).json({
            email : email,
            token : generateToken(user)
        })


})


app.listen(PORT,()=>{
    console.log("Server is running on port -",PORT)
})

