import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrolledCourses: [
    {
      id: 101,
      name: "Advanced JavaScript",
      instructor: "Jane Smith",
      thumbnail: "https://imgs.search.brave.com/yWDwjgZ8z6eWQnYL8A0cw2F5fHYhemamZM2bRrBXsgw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzcxLzkxLzUx/LzM2MF9GXzQ3MTkx/NTE0NV9NMTZLcHBa/S244V2hlRmd2MnRu/V2EzQ0lmbWI2Q3Vh/Zy5qcGc",
      dueDate: "2024-08-30",
      progress: 60,
      completed: false,
    },
    {
      id: 102,
      name: "Full Stack Development",
      instructor: "Alice Johnson",
      thumbnail: "https://imgs.search.brave.com/yWDwjgZ8z6eWQnYL8A0cw2F5fHYhemamZM2bRrBXsgw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzcxLzkxLzUx/LzM2MF9GXzQ3MTkx/NTE0NV9NMTZLcHBa/S244V2hlRmd2MnRu/V2EzQ0lmbWI2Q3Vh/Zy5qcGc",
      dueDate: "2024-09-15",
      progress: 30,
      completed: false,
    },
  ],
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    enrollCourse: (state, action) => {
      state.enrolledCourses.push({ ...action.payload, progress: 0, completed: false });
    },
    markCourseCompleted: (state, action) => {
      const course = state.enrolledCourses.find(c => c.id === action.payload);
      if (course) {
        course.progress = 100;
        course.completed = true;
      }
    },
  },
});

export const { enrollCourse, markCourseCompleted } = studentSlice.actions;
export default studentSlice.reducer;
