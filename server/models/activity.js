const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  // name: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'users',
  // },
  userId:{  type: mongoose.Schema.Types.ObjectId,
     required: true,
     ref: 'users'},
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;