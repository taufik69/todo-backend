const user = require("../models/userModel");

const employeeInfo = async (req, res) => {
  try {
    let { fullName, email, degisnation, employeId } = req.body;
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
      const sendUserData = new user({
        fullName,
        email,
        degisnation,
        employeId,
      });
      sendUserData.save();
      res.status(200).json({
        data: {
          sucess: "Sucessfull upload",
          fullName,
          email,
          degisnation,
          employeId,
        },
      });
    }
  } catch (error) {
    res.status(404).json({
      error: error,
    });
  }
};

module.exports = employeeInfo;
