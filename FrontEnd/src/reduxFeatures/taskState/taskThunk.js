import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTasksRequest, addTaskRequest, deleteTasksRequest, editTaskRequest } from "./taskLinkToBackend";

const getTasks = createAsyncThunk("getTasks", async (_, ThunkApi) => {
  try {
    const tasks = await getTasksRequest();
    return tasks;
  } catch (error) {
    ThunkApi.rejectWithValue(error.message);
  }
});

const addTask = createAsyncThunk("addTask", async (taskToAdd, ThunkApi) => {
  try {
    const tasks = await addTaskRequest(taskToAdd);
    return tasks;
  } catch (error) {
    ThunkApi.rejectWithValue(error.message);
  }
});

const editTask = createAsyncThunk("editTask", async (updatedTask, ThunkApi) => {
  try {
    const tasks = await editTaskRequest(updatedTask);
    return tasks;
  } catch (error) {
    ThunkApi.rejectWithValue(error.message);
  }
});

const deleteTasks = createAsyncThunk("deleteTasks", async (tasksToDelete, ThunkApi) => {
  
  try {
    const tasks = await deleteTasksRequest(tasksToDelete);
    return tasks;
  } catch (error) {
    ThunkApi.rejectWithValue(error.message);
  }
});

export { getTasks, addTask, deleteTasks, editTask };
