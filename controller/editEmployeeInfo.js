const user = require("../models/userModel");

const editEmployeeInfo = async (req, res) => {
  try {
    let { fullName, email, degisnation, employeId } = req.body;
    let { id } = req.headers;

    if (!fullName) {
      res.status(400).json({
        error: "fullname Missing",
      });
    } else if (!email) {
      res.status(400).json({
        error: "email Missing",
      });
    } else if (!degisnation) {
      res.status(400).json({
        error: "degisnation Missing",
      });
    } else if (!employeId) {
      res.status(400).json({
        error: "employeId Missing",
      });
    } else {
      const updateUserInfo = await user.findOneAndUpdate(
        { _id: id },
        {
          $set: { fullName, email, degisnation, employeId },
        },
        { new: true }
      );

      res.status(200).json({
        data: {
          sucess: "Sucessfull updated",
          updateUserInfo,
        },
      });
    }
  } catch (error) {
    res.status(404).json({
      error: error,
    });
  }
};

module.exports = editEmployeeInfo;
