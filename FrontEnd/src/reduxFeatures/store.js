import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./dialogSlice";
import authReducer from "./authenticationState/authSlice";
import taskReducer from "./taskState/taskSlice";

export default configureStore({
  reducer: { dialog: dialogReducer, auth: authReducer, task: taskReducer },
});
