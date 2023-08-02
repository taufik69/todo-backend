const express = require("express");
const _ = express.Router();
_.get("/postinfo", async (req, res) => {
  try {
    res.send("post item");
  } catch (error) {
    res.send("thank you");
  }
});
module.exports = _;
