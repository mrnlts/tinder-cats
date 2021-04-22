const mongoose = require('mongoose');

const { Schema } = mongoose;

const catSchema = new Schema({
  name: String,
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
