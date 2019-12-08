const mongoose = require("mongoose");

const hostSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, require: true },
  password: { type: String, required: true },
  name: { type: String, require: true },
  sex: { type: String, require: true },
  birthday: { type: Date, require: true },
  phone: { type: String, require: true },
  address: { type: String, require: true },
  active: { type: Boolean, require: true, default: true }
});

module.exports = mongoose.model("Host", hostSchema);
