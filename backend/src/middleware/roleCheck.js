
const rolecheck = (roles)=>(req,res,next)=>{
   for (const i of roles){
    if (req.user.role == i) {
        return next()
    }
   }
   return res.status(403).json({
    message : "Insufficient role"
   })
}

export default rolecheck