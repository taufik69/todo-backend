const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.DATABASE_CONNECTION)
    .then(() => console.log("database sucessfully  Connected!"));
};
module.exports = dbConnection;
