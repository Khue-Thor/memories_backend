const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");
const User = require("../models/users");


const login = (req, res, next) => {
  const {email, password} = req.body;

  User.findById(email, password)
}