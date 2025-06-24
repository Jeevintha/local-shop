import User from '../models/user.model.js'


export const getAllUsers = async(req,res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            message: "Received Users Successfully",
            data: users
        })
    } catch (error) {
        console.log("Error :", error)
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

export const deleteUser = async(req,res) => {
    try {
        const { id } = req.params;
    
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
    
        await user.deleteOne({ _id: id });
    
        res.status(200).json({
            message: "User deleted successfully",
            data: user
        });
    } catch (error) {
        console.log("Error :", error)
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

export const getOneUser = async(req,res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)
        if(!user){
            res.status(404).json({
                message : "user not found"
            })
        }
        res.status(200).json({
            message : "Received user successfully",
            data : user
        })
    } catch (error) {
        console.log("Error :", error)
        res.status(500).json({
            message : "Internal Server Error"
        })
    }
}
