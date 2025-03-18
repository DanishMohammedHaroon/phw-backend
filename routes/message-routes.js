import express from "express";
import { sendMessage, getMessages } from "../controllers/message-controller.js";

const router = express.Router();

// Route to send a new message
router.post("/", sendMessage);

// Route to retrieve messages for a specific user (using a query parameter)
router.get("/", getMessages);

export default router;
