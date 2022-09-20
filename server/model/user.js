const mongoose = require("mongoose");

let newUser = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  status: String,
});

const userSchema = mongoose.model("userdb", newUser);

module.exports = userSchema;
