const router = require("express").Router()
const { getAllUsers, getUserById, createNewUser, deleteUser, updateUser,addFriend } = require("../../controllers/user-controller")
router.get('/users', getAllUsers)
router.get("/users/:id", getUserById)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)
router.post("/users", createNewUser)
router.post("/users/:userId/friends/:friendId",addFriend)
module.exports = router