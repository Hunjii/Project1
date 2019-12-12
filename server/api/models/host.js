const mongoose = require("mongoose");

const hostSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, require: true },
  password: { type: String, required: true },
  name: { type: String },
  sex: { type: String },
  birthday: { type: Date },
  phone: { type: String },
  address: { type: String },
  active: { type: Boolean, require: true, default: true }
});

module.exports = mongoose.model("Host", hostSchema);
