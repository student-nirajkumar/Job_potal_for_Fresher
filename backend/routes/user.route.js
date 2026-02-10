import express from "express";
import { 
    login, 
    logout, 
    register, 
    updateProfile,
    forgotPassword,
    resetPassword,
    verifyEmail
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";
 
const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, singleUpload, updateProfile);

// Forgot / Reset
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:token").post(resetPassword);

// Email verification
router.route("/verify-email/:token").get(verifyEmail);

export default router;
