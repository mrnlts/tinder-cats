const mongoose = require('mongoose');

const { Schema } = mongoose;

const catSchema = new Schema({
  name: {
    type: String
  },
  age: Number,
  image: String,
  isSingle: {
    default: true,
    type: Boolean,
    required: true
  },
  owner: { type: Schema.Types.ObjectId, ref: 'User'}
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
