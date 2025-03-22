import express from "express";
import {
  submitFeedback,
  getFeedbacks,
  getFeedbackByPhysio,
} from "../controllers/feedback-controller.js";

const router = express.Router();

router.post("/", submitFeedback);

router.get("/", getFeedbacks);

router.get("/physio", getFeedbackByPhysio);

export default router;
