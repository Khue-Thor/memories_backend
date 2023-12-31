const mongoose = require("mongoose");
const bycrypt = require("bcrypt");
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 30,
    default: "Name",
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: "You must enter a valid URL",
    },
    default:
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (e) => isEmail(e),
      message: "Email is invalid format",
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});


module.exports = mongoose.model("user", userSchema);
