import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isSuccess: false,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      (state.user = null),
        (state.isSuccess = false),
        (state.isLoading = false),
        (state.isError = false);
    },
  },
  extraReducers: {},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
