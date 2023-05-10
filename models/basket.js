const mongoose = require("mongoose");

const BasketSchema = mongoose.Schema({
  title: { type: String, required: true, min: 3 },
  goodsIdsList: { type: Array, required: true },
  id: { type: String, required: true, min: 7 },
});

module.exports = mongoose.model("basket", BasketSchema);