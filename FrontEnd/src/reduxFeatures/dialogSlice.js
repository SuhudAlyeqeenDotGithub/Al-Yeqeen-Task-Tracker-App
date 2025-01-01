import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newTaskDialogIsOpen: false,
  viewTaskDialogIsOpen: false,
  editTaskDialogIsOpen: false,
  editTaskDialogFromViewIsOpen: false,
  viewTaskDataToExport: {},
  deleteTaskDialogIsOpen: false,
  deleteTaskFromView: false,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    setNewTaskDialogIsOpen: (state, action) => {
      state.newTaskDialogIsOpen = action.payload;
    },
    setViewTaskDialogIsOpen: (state, action) => {
      state.viewTaskDialogIsOpen = action.payload;
    },
    setEditTaskDialogIsOpen: (state, action) => {
      state.editTaskDialogIsOpen = action.payload;
    },
    setEditDialogTaskFromViewIsOpen: (state, action) => {
      state.editTaskDialogFromViewIsOpen = action.payload;
    },
    setViewTaskDataToExport: (state, action) => {
      state.viewTaskDataToExport = action.payload;
    },
    setDeleteTaskDialogIsOpen: (state, action) => {
      state.deleteTaskDialogIsOpen = action.payload;
    },
    setDeleteTaskFromView: (state, action) => {
      state.deleteTaskFromView = action.payload;
    },
  },
});

export const {
  setNewTaskDialogIsOpen,
  setViewTaskDialogIsOpen,
  setEditTaskDialogIsOpen,
  setEditDialogTaskFromViewIsOpen,
  setViewTaskDataToExport,
  setDeleteTaskDialogIsOpen,
  setDeleteTaskFromView,
} = dialogSlice.actions;

export default dialogSlice.reducer;
