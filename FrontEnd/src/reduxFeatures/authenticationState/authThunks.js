import { createAsyncThunk } from "@reduxjs/toolkit";
import { register, login } from "./authLinkToBackend";

const registerThunk = createAsyncThunk(
  "register",
  async (userData, ThunkApi) => {
    try {
      const response = await register(userData);
      return response;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);
