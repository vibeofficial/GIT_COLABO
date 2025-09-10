const usermodel = require("../models/user")


exports.createUser=async(req, res)=>{
    try {
        
const createdUser=await usermodel.create(req.body)
res.status(201).json(
    {
        meesage:"user Created",
        data:createdUser
    }
)

    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }

}