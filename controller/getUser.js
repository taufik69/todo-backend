const user = require("../models/userModel");
const getAllUser = async (req, res) => {
  try {
    // get all user
    const allUser = await user.find({});
    res.status(200).json({
      data: {
        allUser,
      },
    });
  } catch (error) {
    res.status(404).json({
      error: error,
    });
  }
};

module.exports = getAllUser;
