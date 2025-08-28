const userModel = require("../Model/user.model");


const DeleteUser = async(req,res)=>{
    const user = await userModel.findById(req.params.id)
        if (!user) return res.status(404).send("User not found");
        if(req.userId !== String(user._id)) return res.status(403).send("you cannot delete this account!")
        await userModel.findByIdAndDelete(user._id);
        return res.status(200).send("user delete successfully");
   
}

module.exports = {DeleteUser};