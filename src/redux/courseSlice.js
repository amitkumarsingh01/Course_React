import { createSlice } from "@reduxjs/toolkit";
import courses from "../data/courses";

const initialState = {
  courses,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    updateLikes: (state, action) => {
      const { id, likes } = action.payload;
      const course = state.courses.find((c) => c.id === id);
      if (course) course.likes = likes;
    },
  },
});

export const { updateLikes } = courseSlice.actions;
export default courseSlice.reducer;
