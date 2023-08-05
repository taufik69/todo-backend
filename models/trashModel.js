const mongoose = require("mongoose");
const { Schema } = mongoose;

const trashSchema = new Schema({
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

module.exports = mongoose.model("trash", trashSchema);
