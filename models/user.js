const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },

    email: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    age:{
        type:Number,
required:true,
    }

},{timestamps:true})


const usermodel = mongoose.model("User", userSchema);

module.exports = usermodel;
