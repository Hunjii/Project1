const mongoose = require('mongoose');

const hostSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, require: true },
  birthday: { type: Date, require: true },
  phone: { type: String, require: true },
  email: { type: String, require: true },
  address: { type: String, require: true }
});

module.exports = mongoose.model('Host', hostSchema);
