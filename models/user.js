const mongoose = require("../db/connection");
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
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(v);
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