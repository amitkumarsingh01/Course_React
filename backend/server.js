const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Store course likes in memory
let courses = [
  { id: 1, likes: 10 },
  { id: 2, likes: 58 },
  { id: 3, likes: 80 },
  { id: 4, likes: 50 },
  { id: 5, likes: 20 },
  { id: 6, likes: 15 },
];

io.on("connection", (socket) => {
  console.log("✅ New WebSocket Connection:", socket.id);

  // Send initial like data
  socket.emit("initialLikes", courses);

  // Handle likes
  socket.on("likeCourse", (courseId) => {
    console.log(`👍 Like received for Course ID: ${courseId}`);

    const course = courses.find((c) => c.id === courseId);
    if (course) {
      course.likes += 1;
      console.log(`✅ Updated Likes for Course ${courseId}: ${course.likes}`);

      io.emit("updateLikes", course); // Broadcast update to all clients
    }
  });

  socket.on("disconnect", () => {
    console.log("❌ User Disconnected:", socket.id);
  });
});

server.listen(4000, () => {
  console.log("🚀 WebSocket Server Running on http://localhost:4000");
});
