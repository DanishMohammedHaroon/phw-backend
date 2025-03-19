import express from "express";
import cors from "cors";
import "dotenv/config";
import initKnex from "knex";
import config from "./knexfile.js";
import authRoutes from "./routes/auth-routes.js";
import feedbackRoutes from "./routes/feedback-routes.js";
import exerciseRoutes from "./routes/exercise-routes.js";
import assignmentRoutes from "./routes/assignment-routes.js";
import progressRoutes from "./routes/progress-routes.js";
import messageRoutes from "./routes/message-routes.js";
import physiotherapistRoutes from "./routes/physiotherapist-routes.js";
import usersRoutes from "./routes/users-routes.js";

const app = express();
const PORT = process.env.PORT || 5050;
const knex = initKnex(config.development);

// Logging middleware: Logs method and URL for every request
app.use((req, _res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());

// Add routes here
app.use("/api/auth", authRoutes);
app.use("/api/exercises", exerciseRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/physiotherapists", physiotherapistRoutes);
app.use("/api/users", usersRoutes);

//test route to check backend
app.get("/", (_req, res) => {
  res.send("PHW Backend is running");
});

// Basic error handling middleware
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
