const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let connect = await mongoose.connect(process.env.MONGO);
    console.log(`mongoDB Connected : ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
