const express = require("express");
const _ = express.Router();
const employeeInfo = require("../../controller/employeeInfo");
const getAllUser = require("../../controller/getUser");
const deleteUser = require("../../controller/deleteUser");
const editEmployeeInfo = require("../../controller/editEmployeeInfo");

_.post("/postinfo", employeeInfo);
_.get("/getuser", getAllUser);
_.delete("/delete/:itemId", deleteUser);
_.post("/updateinfo", editEmployeeInfo);

module.exports = _;
