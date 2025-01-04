import { createSlice } from "@reduxjs/toolkit";
import {registerUser, loginUser} from "./authThunks"

const initialState = {
  user: null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      (state.user = null),
        (state.isSuccess = false),
        (state.isLoading = false),
        (state.isError = false),
        (state.errorMessage = "");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        (state.user = null),
          (state.isLoading = true),
          (state.isSuccess = false),
          (state.isError = false);
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        (state.user = action.payload),
          (state.isLoading = false),
          (state.isSuccess = true),
          (state.isError = false);
      })
      .addCase(registerUser.rejected, (state, action) => {
        (state.user = null),
          (state.isLoading = false),
          (state.isSuccess = false),
          (state.isError = true),
          (state.errorMessage = action.payload);
      })
      .addCase(loginUser.pending, (state) => {
        (state.user = null),
          (state.isLoading = true),
          (state.isSuccess = false),
          (state.isError = false);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        (state.user = action.payload),
          (state.isLoading = false),
          (state.isSuccess = true),
          (state.isError = false);
      })
      .addCase(loginUser.rejected, (state, action) => {
        (state.user = null),
          (state.isLoading = false),
          (state.isSuccess = false),
          (state.isError = true),
          (state.errorMessage = action.payload);
      })
      
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
