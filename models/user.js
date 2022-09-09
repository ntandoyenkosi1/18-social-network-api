const mongoose = require("mongoose");
//email validation
const User = mongoose.model("User", {
  username: {
    type: String,
    required: [true,"The username is required"],
    unique:true,
    trim:true
  },
  email:{
    type:String,
    required:[true,"The email is required."],
    unique:true,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    },
  },
  thoughts:{
    type: [{type:mongoose.Schema.Types.ObjectId, ref:'Thought'}],
  },
  friends:{
    type:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}]
  }
});
module.exports = User;