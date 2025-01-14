const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect("mongodb+srv://test_user:12345@cluster0.ir7qr.mongodb.net/");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error); 
  }
};

module.exports = connectDB;