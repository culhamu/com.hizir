import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import vehicleReducer from "./vehicleSlice.js";
import reportReducer from "./reportSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    vehicles: vehicleReducer,
    reports: reportReducer
  }
});

export default store;
