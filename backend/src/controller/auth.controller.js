import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const registerHandler = async(req,res)=>{
    try {
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
    }  catch (error) {
     res.status(500).json({
         message: `Error : ${error}`
     })
 }
 }

export const loginHandler = async ( req, res )=> {
 
    try{
       const {phone,password} = req.body
       if(!phone || !password){
            return res.status(400).json({
               message: "Phone or Password are required"
           })
       }

       const user = await User.findOne({
           phone : phone
       })
       if(!user){
          return res.status(400).json({
               message: "user not found"
           })
       }
   
       const isAuthorized = await bcrypt.compare(password, user.password)
   
       if(!isAuthorized){
          return res.status(400).json({
               messsage: "Invalid Credentials"
           })
       }

       const token = jwt.sign(
        {id: user._id},
        process.env.JWT_SECRET,
         {expiresIn: "1h"}
        )

       res.status(200).json({
           message: "Login Successfull",
           token : token,
           user : {
                id : user._id,
                username : user.username,
                role : user.role,
                phone : user.phone
           }
       })
   }
       catch (error) {
           res.status(500).json({
               message: `Error : ${error}`
           })
       }
    }