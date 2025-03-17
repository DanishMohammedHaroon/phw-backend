import express from "express";
import { submitFeedback, getFeedbacks } from "../controllers/feedback-controller.js";

const router = express.Router();

// Route to submit feedback
router.post("/", submitFeedback);

// (Optional) Route to get feedbacks
router.get("/", getFeedbacks);

export default router;
