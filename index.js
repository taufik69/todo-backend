require("dotenv").config();
const express = require("express");
const Allroutes = require("./routes");
const app = express();
const cors = require("cors");
const dbConnection = require("./DBconnection/dbconnect");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Allroutes);
dbConnection();

app.listen(3000, () => {
  console.log(`server running on port ${3000}`);
});
