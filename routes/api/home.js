const express = require("express");
const _ = express.Router();
const employeeInfo = require("../../controller/employeeInfo");
const getAllUser = require("../../controller/getUser");
const deleteUser = require("../../controller/deleteUser");

_.post("/postinfo", employeeInfo);
_.get("/getuser", getAllUser);
_.delete("/delete/:itemId", deleteUser);

module.exports = _;
