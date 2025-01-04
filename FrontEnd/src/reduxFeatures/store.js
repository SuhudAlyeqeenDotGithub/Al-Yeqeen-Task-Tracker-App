import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./dialogSlice";
import authReducer from "./authenticationState/authSlice";

export default configureStore({
  reducer: { dialog: dialogReducer, auth: authReducer },
});
