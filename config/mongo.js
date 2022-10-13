const mongoose = require("mongoose");
const { URL_MONGO } = require('../config')

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = connectDB = async () => {
  try {
    await mongoose.connect(URL_MONGO, connectionParams);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connection to DB", error);
    process.exit(1);
  }
};