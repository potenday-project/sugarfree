import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import markerReducer from "./markerSlice";

export default configureStore({
  reducer: {
    marker: markerReducer,
    user: userReducer,
  },
});
