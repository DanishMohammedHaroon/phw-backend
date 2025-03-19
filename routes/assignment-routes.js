import express from "express";
import {
  createAssignment,
  getAssignments,
  deleteAssignment,
  updateAssignmentProgress,
} from "../controllers/assignment-controller.js";

const router = express.Router();

// Route to create a new assignment
router.post("/", createAssignment);

// Route to get all assignments
router.get("/", getAssignments);

// route to update assignemntProgress
router.put("/:id/progress", updateAssignmentProgress);

//route to delete an assignment
router.delete("/:id", deleteAssignment);

export default router;
