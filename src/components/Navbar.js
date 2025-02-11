import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-2xl font-bold">📚 Course App</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/dashboard" className="hover:text-gray-300">Student Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
