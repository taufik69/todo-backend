const express = require("express");
const _ = express.Router();
const homeapi = require("./home");
_.use("/home", homeapi);
module.exports = _;
