const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String
  },
  lastName: {
    type: String
  },
  age: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;
