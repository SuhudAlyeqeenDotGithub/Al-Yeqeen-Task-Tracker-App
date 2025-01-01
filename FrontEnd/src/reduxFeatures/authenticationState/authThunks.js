import { createAsyncThunk } from "@reduxjs/toolkit";
import {register, login} from "./authLinkToBackend"

const registerThunk = createAsyncThunk(
  "register",
  async (userData, ThunkApi) => {
    const response = await register(userData);
    return response;
  }
);
