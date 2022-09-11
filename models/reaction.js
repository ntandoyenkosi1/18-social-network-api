const mongoose = require("../db/connection");

const Reaction = mongoose.model("Reaction", new mongoose.Schema({
  reactionId: {
    type: String,
    default:new mongoose.Types.ObjectId
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280
  },
  username: {
    type: String,
    required: [true, "The username is required"]
  }
}, { timestamps: true }));
module.exports = Reaction;