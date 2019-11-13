const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  address: { type: String, required: true },
  roomImage: [{ pathImg: String }],
  discription: { type: String, required: true },
  area: { type: Number, required: true },
  bathroom: { type: Number, required: true, default: 1 },
  bedroom: { type: Number, required: true, default: 1 },
  kitchen: { type: Number, required: true, default: 1 },
  garage: { type: Number, required: true, default: 1 },
  active: { type: Boolean, require: true }
  //host: { type: mongoose.Schema.Types.ObjectId, ref: 'Host' }
});

module.exports = mongoose.model('Room', roomSchema);
