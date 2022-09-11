const router = require("express").Router()
const {
  findAllThoughts,
  findThoughtById,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction
} = require("../../controllers/thought-controller")
router.get('/thoughts', findAllThoughts)
router.get("/thoughts/:id", findThoughtById)
router.post("/thoughts", createThought)
router.delete("/thoughts/:id", deleteThought)
router.put("/thoughts/:id", updateThought)
router.post("/thoughts/:thoughtId/reactions", addReaction)
router.post("/thoughts/:thoughtId/reactions", removeReaction)
module.exports = router