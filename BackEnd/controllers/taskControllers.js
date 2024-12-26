const asyncHandler = require("express-async-handler");
const User = require("../mongooseModels/userModel");

//@desc get tasks
//router get request to /api/tasks
//access private
const getTasks = asyncHandler(async (req, res) => {
 // Send the response
});

//@desc add tasks
//router post request to /api/tasks
//access private
const addTask = asyncHandler(async (req, res) => {


});

//@desc edit tasks
//router put request to /api/tasks
//access private
const editTask = asyncHandler(async (req, res) => {
 
});

//@desc delete tasks
//router delete request to /api/tasks
//access private
const deleteTasks = asyncHandler(async (req, res) => {

});

module.exports = { getTasks, addTask, editTask, deleteTasks };
