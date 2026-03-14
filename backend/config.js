const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // Modern Mongoose (6+) doesn't need useNewUrlParser or useUnifiedTopology
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    // Exit process with failure code 1
    process.exit(1);
  }
};

module.exports = connectDB;