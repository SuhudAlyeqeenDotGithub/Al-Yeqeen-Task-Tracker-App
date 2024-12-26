const mongoose = require("mongoose");
const { Schema, model, SchemaType } = mongoose;
const User = require("./userModel");

const deletedTaskSchema = new Schema(
  {
    taskName: { type: String, required: [true, "Task name is missing"] },
    taskDescription: { type: String },
    taskStartDate: { type: Date },
    taskStartTime: { type: String },
    taskDueTime: { type: String },
    taskDeleteStatus: {
      type: Boolean,
      required: [true, "Delete task status is missing"],
      default: true,
    },
    prevTaskStatus: {
      type: String,
      required: [true, "Previous task status is missing"],
    },
    taskOwner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const DeletedTask = model("DeletedTask", deletedTaskSchema);
module.exports = DeletedTask;
