//@desc get tasks
//router get request to /api/tasks
//access private
const getTasks = (req, res) => {
  res.status(200).json({ task: "You have just requested a task for view" });
};

//@desc add tasks
//router post request to /api/tasks
//access private
const addTask = (req, res) => {
  res.status(200).json({ task: "You have just added a new task" });
};

//@desc edit tasks
//router put request to /api/tasks
//access private
const editTask = (req, res) => {
  res
    .status(200)
    .json({ task: `You have just edited the task ${req.params.id}` });
};

//@desc delete tasks
//router delete request to /api/tasks
//access private
const deleteTasks = (req, res) => {
  res
    .status(200)
    .json({ task: `You have just deleted the task ${req.params.id}` });
};

module.exports = { getTasks, addTask, editTask, deleteTasks };
