import { createSlice } from "@reduxjs/toolkit";
import { getTasks, addTask, deleteTasks, editTask } from "./taskLinkToBackend";

const initialState = {
  tasks: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: false,
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.tasks = [];
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.tasks = [];
        state.isSuccess = false;
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = false;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = false;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.tasks = [];
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(addTask.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = false;
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(deleteTasks.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = false;
      })
      .addCase(deleteTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = false;
      })
      .addCase(deleteTasks.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(editTask.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = false;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = false;
      })
      .addCase(editTask.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { reset } = taskSlice.actions;
export default taskSlice.reducer;
