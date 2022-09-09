const mongoose = require("mongoose");
//email validation
const Reaction = mongoose.model("Reaction", {
  reactionId: {
    type: new mongoose.Types.ObjectId
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
}, { timestamps: true });
module.exports = Reaction;