import express from "express";
import {
  addProgressLog,
  getProgressLogs,
} from "../controllers/progress-controller.js";

const router = express.Router();

// Endpoint to add a new progress log
router.post("/", addProgressLog);

// Endpoint to retrieve progress logs for a patient (via query parameter)
router.get("/", getProgressLogs);

export default router;
