import express from "express";
import {
  getAllExercises,
  getExerciseById,
} from "../controllers/exercise-controller.js";

const router = express.Router();

// Route to fetch all exercises
router.get("/", getAllExercises);

// Route to fetch a single exercise by ID
router.get("/:id", getExerciseById);

export default router;
