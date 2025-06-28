import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'


const protect = async(req, res, next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")){
      return res.status(401).json({ message : "Unauthorized"});
    }
    const token = authHeader.split(" ")[1];
        if(!token){
          return res.status(400).json({
            message: "Token Required"
          })
        }
        let decoded;
        try {
          decoded = jwt.verify(token, process.env.JWT_SECRET)
        } catch (error) {
          return res.status(403).json({
            message: "Forbidden"
          })
        }

        const foundUser = await User.findById(decoded.id).select("-password")

        req.user = foundUser

        next()
}

export default protect
