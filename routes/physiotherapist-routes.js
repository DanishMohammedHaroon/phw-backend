import express from "express";
import { getPhysiotherapists, getPhysiotherapistById } from "../controllers/physiotherapist-controller.js";

const router = express.Router();

router.get("/", getPhysiotherapists);
router.get("/:id", getPhysiotherapistById);

export default router;
