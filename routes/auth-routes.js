import express from "express";
import users from "../controllers/auth-controller.js";

const router = express.Router();

router.post("/register", users.register);
router.post("/login", users.login);
// NOTE: profile endpoint; need to add token verification middleware
router.get("/profile", users.getProfile);

export default router;
