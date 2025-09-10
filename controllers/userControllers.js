
const usermodel = require("../models/user")


exports.createUser=async(req, res)=>{
    try {
        const {firstName,age,gender,email}= req.body
        const data ={
            firstName,
            age,
            gender,
            email

        }
const createdUser=await usermodel.create(data)
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



const userModel = require('../models/user');


exports.getAll = async (req, res) => {
  try {
    const users = await userModel.find();
    
    if (users.length === 0) {
      return res.status(404).json('No user found')
    };

    res.status(200).json({
      message: 'All users below',
      data: users
    })
  } catch (error) {
    res.status(500).json('Error getting all users', error.message)
  }
};

exports.getOne = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await userModel.findById(id);
    
    if (!user) {
      return res.status(404).json('User not found')
    };

    res.status(200).json({
      message: 'User below',
      data: user
    })
  } catch (error) {
    res.status(500).json('Error getting all users', error.message)


};
}