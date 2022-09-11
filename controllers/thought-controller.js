const Thought = require("../models/thought")
const Reaction = require("../models/reaction")
function findAllThoughts(req, res) {
  Thought.find({}, function (err, data) {
    if (err) {
      return res.json({ success: false, error: err })
    }
    return res.json({ success: true, data: data })
  }).populate("username")
}

function findThoughtById(req, res) {
  Thought.findById(req.params.id, function (err, data) {
    if (err) {
      return res.json({ success: false, error: err })
    }
    return res.json({ success: true, data: data })
  }).populate("username")
}

function createThought(req, res) {
  Thought.create(req.body, function (err, data) {
    if (err) {
      return res.json({ success: false, error: err })
    }
    return res.json({ success: true, data: data })
  })
}

function deleteThought(req, res) {
  Thought.findByIdAndDelete(req.params.id, function (err, data) {
    if (err) {
      return res.json({ success: false, error: err })
    }
    return res.json({ success: true, data: data })
  })
}

function updateThought(req, res) {
  Thought.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
    if (err) {
      return res.json({ success: false, error: err })
    }
    return res.json({ success: true, data: data })
  })
}

function addReaction(req, res) {
  const reaction = new Reaction({ reactionBody: req.body.reactionBody, username: req.body.username })
  Thought.findByIdAndUpdate(req.params.thoughtId, {$addToSet:{ reactions: reaction._id }}, function (err, data) {
    if (err) {
      return res.json({ success: false, error: err })
    }
    return res.json({ success: true, data: data })
  })
}

function removeReaction(req, res) {
  const reaction = new Reaction({ reactionBody: req.body.reactionBody, username: req.body.username })
  Thought.findByIdAndUpdate(req.params.thoughtId, {$pull:{ reactions: reaction._id }}, function (err, data) {
    if (err) {
      return res.json({ success: false, error: err })
    }
    return res.json({ success: true, data: data })
  })
}
module.exports = {
  findAllThoughts,
  findThoughtById,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction
}