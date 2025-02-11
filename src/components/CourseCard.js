import React from "react";
import LikeCounter from "./LikeCounter";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";

const socket = io("http://localhost:4000");

const CourseCard = ({ course }) => {
  const handleLike = (event) => {
    event.preventDefault(); // Prevents navigation when clicking Like
    socket.emit("likeCourse", course.id);
  };

  return (
    <Link to={`/course/${course.id}`} className="relative group">
      <div className="border p-4 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
        <img src={course.thumbnail} alt={course.name} className="w-full h-40 object-cover rounded" />
        <h2 className="text-xl font-bold mt-2">{course.name}</h2>
        <p className="text-gray-600">{course.instructor}</p>
        <p className="text-sm text-gray-500">{course.enrollmentStatus}</p>

        <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
          <button onClick={handleLike} className="text-red-500 text-lg">❤️</button>
        </div>
        <LikeCounter courseId={course.id} />
      </div>
    </Link>
  );
};

export default CourseCard;
