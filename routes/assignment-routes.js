import express from "express";
import {
  createAssignment,
  getAssignments,
} from "../controllers/assignment-controller.js";

const router = express.Router();

// Route to create a new assignment
router.post("/", createAssignment);

// Route to get all assignments
router.get("/", getAssignments);

export default router;
