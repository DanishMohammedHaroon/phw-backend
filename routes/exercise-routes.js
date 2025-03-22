import express from "express";
import {
  getAllExercises,
  getExerciseById,
} from "../controllers/exercise-controller.js";

const router = express.Router();

router.get("/", getAllExercises);

router.get("/:id", getExerciseById);

export default router;
