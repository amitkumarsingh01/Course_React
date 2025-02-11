import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import studentReducer from "./studentSlice";

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    students: studentReducer,
  },
});

export default store;
