const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  password: { type: String, required: true, min: 15 },
  email: { type: String, required: true, min: 8 },
  id: { type: String, required: true, min: 3 },
});

module.exports = mongoose.model("User", UserSchema);
