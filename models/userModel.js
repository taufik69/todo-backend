const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  degisnation: {
    type: String,
    required: true,
  },
  employeId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
