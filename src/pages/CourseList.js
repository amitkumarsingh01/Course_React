import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";

const CourseList = () => {
  const courses = useSelector((state) => state.courses.courses);
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearch = (query) => {
    setFilteredCourses(
      courses.filter(
        (course) =>
          course.name.toLowerCase().includes(query.toLowerCase()) ||
          course.instructor.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-3 gap-4 mt-4">
        {filteredCourses.map((course) => (
          <Link key={course.id} to={`/course/${course.id}`}>
            <CourseCard course={course} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
