import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000"); // Ensure this URL matches your backend

const LikeCounter = ({ courseId }) => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Check connection status
    socket.on("connect", () => {
      console.log("✅ Connected to WebSocket Server");
    });

    socket.on("disconnect", () => {
      console.log("❌ Disconnected from WebSocket Server");
    });

    // Receive initial like count
    socket.on("initialLikes", (courses) => {
      const course = courses.find((c) => c.id === courseId);
      if (course) {
        setLikes(course.likes);
      }
    });

    // Listen for real-time like updates
    socket.on("updateLikes", (data) => {
      if (data.id === courseId) {
        setLikes(data.likes);
      }
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("initialLikes");
      socket.off("updateLikes");
    };
  }, [courseId]);

  return <p className="text-gray-500">Likes: {likes}</p>;
};

export default LikeCounter;
