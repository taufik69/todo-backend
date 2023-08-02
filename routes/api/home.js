const express = require("express");
const _ = express.Router();
const employeeInfo = require("../../controller/employeeInfo");
_.post("/postinfo", employeeInfo);
module.exports = _;
