const mongoose = require("mongoose");

const oderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Host",
    require: true
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true
  },
  //host: { type: mongoose.Schema.Types.ObjectId, ref: 'Host' }
  date: { type: Date, require: true, default: Date().now },
  status: { type: Number, require: true, default: "0" }
});

module.exports = mongoose.model("Oder", oderSchema);
