const mongoose = require("mongoose");
const user = require("./user");

const goodSchema = mongoose.Schema({
  title: { type: String, required: true, min: 3 },
  contentText: { type: String, required: false },
  creator: { type: String, required: true },
  id: { type: String, required: true, min: 7 },
});

module.exports = mongoose.model("good", goodSchema);