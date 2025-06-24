import bcrypt from 'bcryptjs'

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
   }
       catch (error) {
           res.status(500).json({
               message: `Error : ${err}`
           })
       }
    }