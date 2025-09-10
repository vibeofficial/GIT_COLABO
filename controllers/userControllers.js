const userModel = require('../models/user');


exports.deleteUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await userModel.findById(id);

    if (!user) {
      return res.status(404).json('User not found')
    };

    await userModel.findByIdAndDelete(user._id);
    res.status(200).json('Deleted')
  } catch (error) {
    res.status(500).json('Error deleting user', error.message)
  }
};

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
  }
};