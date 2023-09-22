import { configureStore } from "@reduxjs/toolkit";
import markerReducer from "./userSlice";

export default configureStore({
  reducer: {
    marker: markerReducer,
  },
});
