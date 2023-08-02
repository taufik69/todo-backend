const express = require("express");
const _ = express.Router();
const allApi = require("./api");

const baseUrl = process.env.BASE_URL;

_.use(baseUrl, allApi);
_.use(baseUrl, async (req, res) => {
  res.status(404).json({
    error: "invalid routes",
  });
});

module.exports = _;
