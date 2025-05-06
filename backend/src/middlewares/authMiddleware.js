import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET

const authMiddleware = (req, res, next) => {
    const token = req.header.authorization

    if(!token){
        return res.status(400).json({
            message : "No Token"
        })
    }
    try{
        const decoded = jwt.verify(token, secret)

        if(!decoded){
            return res.status(400).json({
                message : "Unauthorized"
            })
        }

        next()

    }
    catch(err){
        console.error("error:",err)
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }

}

export default authMiddleware