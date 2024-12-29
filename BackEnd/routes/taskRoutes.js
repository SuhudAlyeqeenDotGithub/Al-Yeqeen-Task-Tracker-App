const express = require("express");
const router = express.Router();
const {
  getTasks,
  editTask,
  addTask,
  deleteTasks,
} = require("../controllers/taskControllers");
const authenticateUser = require("../middlewares/authMiddleware");

router
  .route("/")
  .get(authenticateUser, getTasks)
  .post(authenticateUser, addTask)
  .put(authenticateUser, editTask)
  .delete(authenticateUser, deleteTasks);

module.exports = router;
