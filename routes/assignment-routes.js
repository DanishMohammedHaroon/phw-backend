import express from "express";
import {
  createAssignment,
  getAssignments,
  deleteAssignment,
  updateAssignmentProgress,
} from "../controllers/assignment-controller.js";

const router = express.Router();

router.post("/", createAssignment);

router.get("/", getAssignments);

router.put("/:id/progress", updateAssignmentProgress);

router.delete("/:id", deleteAssignment);

export default router;
