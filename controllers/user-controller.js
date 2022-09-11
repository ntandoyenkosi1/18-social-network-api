const User = require("../models/user")
function getAllUsers(req, res) {
  User.find({}, (err, data) => {
    if (err) {
      return res.json({
        success: false,
        error: err
      })
    }
    return res.json({ success: true, data: data })
  })
}

function getUserById(req, res) {
  const { id } = req.params
  User.findById(id, (err, data) => {
    if (err) {
      return res.json({
        success: false,
        error: err
      })
    }
    return res.json({ success: true, data: data })
  })//.populate('thoughts').populate('friends')
}
function deleteUser(req, res) {
  User.findByIdAndDelete(req.params.id, function (err, data) {
    if (err) {
      return res.json({ success: false, error: err })
    }
    return res.json({ success: true, data: data })
  })
}
function updateUser(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
    if (err) {
      return res.json({ success: false, error: err })
    }
    return res.json({ success: true, data: data })
  })
}
function createNewUser(req, res) {
  const { username, email } = req.body
  const user = new User({ username: username, email: email })
  user.save((err, data) => {
    if (err) {
      return res.json({
        success: false,
        error: err
      })
    }
    return res.json({ success: true, data: data })
  })
}
function addFriend(req, res) {
  User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet:{ friends: req.params.friendId} }, function (err, data) {
    if (err) {
      return res.json({ success: false, error: err })
    }
    return res.json({ success: true, data: data })
  })
}
module.exports = {
  getAllUsers, getUserById, createNewUser, deleteUser, updateUser,addFriend
}