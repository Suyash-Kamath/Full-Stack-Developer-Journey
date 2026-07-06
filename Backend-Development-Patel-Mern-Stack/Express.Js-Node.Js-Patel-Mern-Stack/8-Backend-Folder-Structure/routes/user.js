import express from "express";
import { register ,login } from "../controllers/user.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
const router = express.Router();

router.route("/register").post(isAuthenticated,register);

router.route("/login").post(isAuthenticated,login)

export default router;