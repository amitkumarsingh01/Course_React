import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
      <div
        className="bg-blue-600 h-4 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
