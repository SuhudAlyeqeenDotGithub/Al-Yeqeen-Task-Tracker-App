const asyncHandler = require("express-async-handler");
const User = require("../mongooseModels/userModel");
const Task = require("../mongooseModels/taskModel");

//@desc get tasks
//router get request to /api/tasks
//access private
const getTasks = asyncHandler(async (req, res) => {
  const userId = req.userId;
  try {
    const userTasks = await Task.find({ taskOwner: userId });
    res.status(200).json({ message: "Task Fetched Successfully", userTasks });
  } catch (error) {
    throw new Error(error.message ?? error ?? "Error fetching tasks");
  }
});

//@desc add tasks
//router post request to /api/tasks
//access private
const addTask = asyncHandler(async (req, res) => {
  const { taskName, taskDescription, taskStartDate, taskDueDate, taskStartTime, taskDueTime, taskStatus } = req.body;

  if (!taskName || !taskStatus) {
    res.status(400);
    throw new Error("Please fill in the mandatory fields (task name and task status)");
  }

  const userId = req.userId;

  try {
    const task = await Task.create({
      taskName,
      taskDescription,
      taskStartDate,
      taskDueDate,
      taskStartTime,
      taskDueTime,
      taskStatus,
      taskOwner: userId
    });

    const userTasks = await Task.find({ taskOwner: userId });

    res.status(200).json({ message: "Task added Successfully", userTasks });
  } catch (error) {
    throw new Error(`The task ${taskName} creation failed`);
  }
});

//@desc edit tasks
//router put request to /api/tasks
//access private
const editTask = asyncHandler(async (req, res) => {
  // get the data that is being updated
  const { _id, taskName, taskDescription, taskStartDate, taskDueDate, taskStartTime, taskDueTime, taskStatus } =
    req.body;

  const userId = req.userId;

  // task name and status must not be empty
  if (!taskName || !taskStatus) {
    res.status(400);
    throw new Error("Please fill in the mandatory fields (task name and task status)");
  }

  // get the id of the task that is being updated
  try {
    const taskToUpdate = await Task.findByIdAndUpdate(
      _id,
      {
        taskName,
        taskDescription,
        taskStartDate,
        taskDueDate,
        taskStartTime,
        taskDueTime,
        taskStatus
      },
      { new: true }
    );

    const userTasks = await Task.find({ taskOwner: userId });

    res.status(201).json({ message: "Task Edited Successfully", userTasks });
  } catch (err) {
    res.status(400);
    throw new Error(err.message);
  }
});

//@desc delete tasks
//router delete request to /api/tasks
//access private
const deleteTasks = asyncHandler(async (req, res) => {
  // get the id or ids of tasks to be deleted
  //{tasksToDelete: [task1, task2, task3]}
  const { tasksToDelete } = req.body;

  console.log("Request body:", tasksToDelete);

  if (!Array.isArray(tasksToDelete) || tasksToDelete.length === 0) {
    res.status(404);
    throw new Error("There is no task to delete");
  }

  try {
    const deletedTasks = await Task.deleteMany({ _id: { $in: tasksToDelete } });

    const userTasks = await Task.find({ taskOwner: userId });

    res.status(200).json({
      message: `${deletedTasks.deletedCount} tasks deleted successfully`,
      userTasks
    });
  } catch (err) {
    res.status(500).json({ message: "Error deleting tasks", error });
  }

  // locate the tasks in the database
  // delete the tasks
  //return a delete successful
});

module.exports = { getTasks, addTask, editTask, deleteTasks };
