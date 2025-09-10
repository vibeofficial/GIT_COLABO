const usermodel = require("../models/user");




exports.updateUser = async(req, res) => {
  try {
    const {id} = req.params;
    const user = await userModel.findById(id);


     if (!user) {
      return res.status(404).json("No user found");
    }
   
  } catch (error) {
     res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};
  

exports.deleteUser = async(req, res) => {
  try {
    const {id} = req.params;
    const user = await userModel.findById(id);

     if (!user) {
      return res.status(404).json("No user found");
    }
    await userModel.findByIdAndDelete(user._id);
    res.status(200).json('Deleted successfully');
  } catch (error) {
     res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { firstName, age, gender, email } = req.body;
    if(!firstName || !gender || !age || !email){
        return res.status(400).json("all inputs are required")
    }
    const data = {
      firstName,
      age,
      gender,
      email,
    };

    const createdUser = await userModel.create(data);
    res.status(201).json({
      message: "User created",
      data: createdUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await userModel.find();

    if (users.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }

    res.status(200).json({
      message: "All users below",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting all users",
      error: error.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User below",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting user",
      error: error.message,
    });
  }
};
