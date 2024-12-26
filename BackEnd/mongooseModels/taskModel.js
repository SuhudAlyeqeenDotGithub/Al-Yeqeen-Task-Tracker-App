const mongoose = require("mongoose");
const { Schema, model, SchemaType } = mongoose;
const User = require("./userModel");

const taskSchema = new Schema(
  {
    taskName: { type: String, required: [true, "Please enter a task name"] },
    taskDescription: { type: String },
    taskStartDate: { type: Date, default: Date.now },
    taskDueDate: {
      type: Date,
      default: () => {
        const now = new Date();
        now.setDate(now.getDate() + 2);
        return now;
      },
    },
    taskStartTime: { type: String, default: "00:00" },
    taskDueTime: { type: String, default: "00:00" },
    taskStatus: { type: String, required: [true, "Please enter a task status"] },
    taskOwner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Task = model("Task", taskSchema);
module.exports = Task;
