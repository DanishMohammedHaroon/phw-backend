import express from "express";
import { getAllUsers, getClients } from "../controllers/users-controller.js";

const router = express.Router();

router.get("/", getAllUsers);

router.get("/clients", getClients);

export default router;