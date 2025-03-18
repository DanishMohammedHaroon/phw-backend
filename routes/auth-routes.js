import express from "express";
import users from "../controllers/auth-controller.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/register", users.register);
router.post("/login", users.login);
router.get("/profile", verifyToken, users.getProfile);

export default router;
