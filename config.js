const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/assignment-portal';

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);  // Simply connect without the deprecated options
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

