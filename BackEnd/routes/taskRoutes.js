const express = require("express");
const router = express.Router();
const {
  getTasks,
  editTask,
  addTask,
  deleteTasks,
} = require("../controllers/taskControllers");

router.route("/").get(getTasks).post(addTask);

router.route("/:id").put(editTask).delete(deleteTasks);

module.exports = router;
