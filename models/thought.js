const mongoose = require("mongoose");
//email validation
const Thought = mongoose.model("Thought", {
  thoughtText: {
    type: String,
    required: [true, "The username is required"],
    minLength: 1,
    maxLength: 280
  },
  username: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    required: true,
  },
  reactions: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reaction' }],
  }
}, { timestamps: true });
module.exports = Thought;