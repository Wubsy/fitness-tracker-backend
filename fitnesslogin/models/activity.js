const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  //user: { type: mongoose.Schema.Types.ObjectId, ref:"username", required: true },
  //userName: { type: Schema.Types.ObjectId, ref: "users" },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;