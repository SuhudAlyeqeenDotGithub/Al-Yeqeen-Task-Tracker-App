import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./dialogSlice";

export default configureStore({
  reducer: { dialog: dialogReducer },
});
