const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
  product: String,
  name: String,
  qty: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

module.exports = PositionSchema;   