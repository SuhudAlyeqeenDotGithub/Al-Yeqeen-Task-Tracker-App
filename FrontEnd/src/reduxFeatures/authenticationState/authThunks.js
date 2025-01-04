import { createAsyncThunk } from "@reduxjs/toolkit";
import { register, login } from "./authLinkToBackend";

const registerUser = createAsyncThunk(
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

const loginUser = createAsyncThunk(
  "login",
  async (userData, ThunkApi) => {
    try {
      const response = await login(userData)
      return response
    }catch (error) {
       return ThunkApi.rejectWithValue(error.response?.data || error.message)
    }
  }
)



export {registerUser, loginUser}
