import express from "express";
import {
  submitFeedback,
  getFeedbacks,
  getFeedbackByPhysio,
} from "../controllers/feedback-controller.js";

const router = express.Router();

// Route to submit feedback
router.post("/", submitFeedback);

// (Optional) Route to get feedbacks
router.get("/", getFeedbacks);

//Route to get feedbacks by physio
router.get("/physio", getFeedbackByPhysio);

export default router;
