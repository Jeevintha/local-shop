import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'

export const register =  async (req,res)=>{

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
    }

export const login = async(req,res)=>{
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


}