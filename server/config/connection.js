const mongoose = require("mongoose");

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Export connection
module.exports = mongoose.connection;
