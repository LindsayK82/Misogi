const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/misogi',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;