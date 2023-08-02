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
      const sendUserData = await new user({
        fullName,
        email,
        degisnation,
        employeId,
      }).save();
      res.status(400).json({
        data: sendUserData,
      });
    }
  } catch (error) {
    res.send("thank you");
  }
};
module.exports = employeeInfo;
