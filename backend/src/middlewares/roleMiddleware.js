const roleMiddleware = (allowedRoles = []) => {
return (req, res, next)=>{
    if(allowedRoles.includes(req.body.role)){
        next()
    }
    else{
        res.status(400).json({"msg": "access denied"})
    }
}
}

export default roleMiddleware