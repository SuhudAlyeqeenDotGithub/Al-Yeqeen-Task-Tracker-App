require("dotenv").config();
require("colors"); // Ensure this is installed

const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB database connected to ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDatabase;