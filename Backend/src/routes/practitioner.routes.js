import express from "express";
import {
  registerPractitioner,
  loginPractitioner,
  getProfile,
  updateProfile,
  updateWorkingHours,
  updateSpecialization,
  getMyPatients,
  getRatings,
  deactivateAccount,
  logoutPractitioner,
} from "../controllers/practitioner.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js"; // 🔒 Auth middleware

const router = express.Router();

/* ======================================
   🧾 AUTH ROUTES
====================================== */
router.post("/register", registerPractitioner);  // Sign up new practitioner
router.post("/login", loginPractitioner);        // Login and get token
router.post("/logout", verifyJWT, logoutPractitioner); // Logout

/* ======================================
   👤 PROFILE MANAGEMENT
====================================== */
router.get("/profile", verifyJWT, getProfile);         // Get own profile
router.put("/profile", verifyJWT, updateProfile);      // Update personal info
router.put("/specialization", verifyJWT, updateSpecialization); // Update specialization fields
router.put("/working-hours", verifyJWT, updateWorkingHours);     // Manage working hours
router.put("/deactivate", verifyJWT, deactivateAccount);         // Soft delete

/* ======================================
   🧑‍🤝‍🧑 PATIENTS & RATINGS
====================================== */
router.get("/patients", verifyJWT, getMyPatients);   // View assigned patients
router.get("/ratings", verifyJWT, getRatings);       // View overall ratings

export default router;
