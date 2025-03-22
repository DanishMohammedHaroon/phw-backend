import express from "express";
import http from "http";
import cors from "cors";
import "dotenv/config";
import initKnex from "knex";
import { Server as SocketIOServer } from "socket.io";
import config from "./knexfile.js";
import authRoutes from "./routes/auth-routes.js";
import feedbackRoutes from "./routes/feedback-routes.js";
import exerciseRoutes from "./routes/exercise-routes.js";
import assignmentRoutes from "./routes/assignment-routes.js";
import progressRoutes from "./routes/progress-routes.js";
import messageRoutes from "./routes/message-routes.js";
import physiotherapistRoutes from "./routes/physiotherapist-routes.js";
import usersRoutes from "./routes/users-routes.js";

//setup
const app = express();
const PORT = process.env.PORT || 5050;
const knex = initKnex(config.development);
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: { origin: "*" },
});

// Logging middleware: Logs method and URL for every request
app.use((req, _res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

//middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static("public/images"));


app.use("/api/auth", authRoutes);
app.use("/api/exercises", exerciseRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/physiotherapists", physiotherapistRoutes);
app.use("/api/users", usersRoutes);

//Backend  test route
app.get("/", (_req, res) => {
  res.send("PHW Backend is running");
});

//Error handling middleware
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Setup Socket.IO connection
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("join", (room) => {
    console.log(`Socket ${socket.id} joining room: ${room}`);
    socket.join(room);
  });

  socket.on("sendMessage", (data) => {

    console.log("Message received:", data);

    socket.to(data.room).emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});
 
server.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});