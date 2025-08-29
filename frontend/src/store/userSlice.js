import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService.js";

const token = localStorage.getItem("token");

const initialState = {
  user: null,
  token: token || null,
  status: "idle",
  error: null
};

export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  try {
    return await authService.login(data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const register = createAsyncThunk("user/register", async (data, thunkAPI) => {
  try {
    return await authService.register(data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        state.status = "succeeded";
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        state.status = "succeeded";
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      });
  }
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
