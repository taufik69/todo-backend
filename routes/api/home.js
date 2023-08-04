const express = require("express");
const _ = express.Router();
const employeeInfo = require("../../controller/employeeInfo");
const getAllUser = require("../../controller/getUser");
_.post("/postinfo", employeeInfo);
_.get("/getuser", getAllUser);
module.exports = _;
