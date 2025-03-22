import express from "express";
import {
  addProgressLog,
  getProgressLogs,
} from "../controllers/progress-controller.js";

const router = express.Router();

router.post("/", addProgressLog);

router.get("/", getProgressLogs);

export default router;
