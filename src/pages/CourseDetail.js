import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { enrollCourse } from "../redux/studentSlice";
import Syllabus from "../components/Syllabus";
import { motion } from "framer-motion";

const CourseDetail = () => {
  const { id } = useParams();
  const course = useSelector((state) =>
    state.courses.courses.find((c) => c.id === parseInt(id))
  );

  const dispatch = useDispatch();

  if (!course) return <h2>Course not found</h2>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg"
    >
      <img src={course.thumbnail} alt={course.name} className="w-full h-48 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{course.name}</h1>
      <p className="text-gray-600 mt-2">Instructor: {course.instructor}</p>
      <p className="text-gray-500 mt-2">{course.description}</p>

      <div className="mt-4">
        <p><strong>Status:</strong> {course.enrollmentStatus}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Schedule:</strong> {course.schedule}</p>
        <p><strong>Location:</strong> {course.location}</p>
        <p><strong>Prerequisites:</strong> ${course.prerequisites}</p>
      </div>

      <Syllabus syllabus={course.syllabus} />

      {/* Enroll Button */}
      <button
        onClick={() => dispatch(enrollCourse(course))}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md transition-transform duration-300 hover:scale-105"
      >
        Enroll Now
      </button>
    </motion.div>
  );
};

export default CourseDetail;
