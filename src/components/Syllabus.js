import React, { useState } from "react";
import { motion } from "framer-motion";

const Syllabus = ({ syllabus }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md transition-transform duration-300"
      >
        {expanded ? "Hide Syllabus ⬆" : "View Syllabus ⬇"}
      </button>
      
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
          className="mt-2 bg-gray-100 p-4 rounded-lg"
        >
          {syllabus.map((week, index) => (
            <div key={index} className="p-2 border-b">
              <h3 className="font-bold text-lg">{`Week ${week.week}: ${week.topic}`}</h3>
              <p className="text-gray-600">{week.content}</p>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Syllabus;
