const mongoose = require("mongoose");
const cloudurl = "mongodb+srv://prepbytes:prepbytes2194@cluster0.ltpukis.mongodb.net/Prepbytes?retryWrites=true&w=majority"
const connection = async () => {
  try {
    await mongoose.connect(cloudurl);
    console.log("Connected to the database");
  }
  catch (err) {
    console.error("Error occured in connection to DataBase", err);
  }
};
module.exports = connection;