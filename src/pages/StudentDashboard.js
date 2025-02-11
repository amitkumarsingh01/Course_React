import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { markCourseCompleted } from "../redux/studentSlice";
import ProgressBar from "../components/ProgressBar";
import { motion } from "framer-motion";

const StudentDashboard = () => {
  const enrolledCourses = useSelector((state) => state.students.enrolledCourses);
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold">📚 Student Dashboard</h1>
      {enrolledCourses.length === 0 ? (
        <p>No enrolled courses</p>
      ) : (
        enrolledCourses.map((course) => (
          <motion.div
            key={course.id}
            className="p-4 my-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-xl font-bold">{course.name}</h2>
            <p className="text-gray-600">Instructor: {course.instructor}</p>
            <img src="https://imgs.search.brave.com/yWDwjgZ8z6eWQnYL8A0cw2F5fHYhemamZM2bRrBXsgw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzcxLzkxLzUx/LzM2MF9GXzQ3MTkx/NTE0NV9NMTZLcHBa/S244V2hlRmd2MnRu/V2EzQ0lmbWI2Q3Vh/Zy5qcGc" 
alt={course.name} className="w-full h-40 object-cover rounded mt-2" />
            <p className="text-gray-500 mt-2"><strong>Due Date:</strong> {course.dueDate}</p>
            
            <ProgressBar progress={course.progress || 0} />
            
            <button
              onClick={() => dispatch(markCourseCompleted(course.id))}
              className={`mt-2 px-4 py-2 rounded ${
                course.completed ? "bg-green-400 text-white" : "bg-blue-500 text-white"
              }`}
            >
              {course.completed ? "✔ Completed" : "📌 Mark as Completed"}
            </button>
          </motion.div>
        ))
      )}
    </motion.div>
  );
};

export default StudentDashboard;
