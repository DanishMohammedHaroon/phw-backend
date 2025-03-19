import express from "express";
import { getAllUsers, getClients } from "../controllers/users-controller.js";

const router = express.Router();

// Endpoint to get all users (if needed)
router.get("/", getAllUsers);

// Endpoint to get only clients
router.get("/clients", getClients);

export default router;