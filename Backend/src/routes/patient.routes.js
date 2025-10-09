import express from "express";
import {
  getProfile,
  updateProfile,
  getMedicalHistory,
  updateMedicalHistory,
  getTherapyPreferences,
  updateTherapyPreferences,
  getAvailability,
  updateAvailability,
  getUpcomingSessions,
  getSessionHistory,
  getProgress,
  getNotifications,
  updateProfileImage,
  deactivateAccount,
} from "../controllers/patient.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js"; // 🔒 Ensure user is logged in

const router = express.Router();

// All routes are protected
router.use(verifyJWT);

/* ===========================
   🧍‍♂️ Patient Profile Routes
=========================== */
router.get("/profile", getProfile);                   // Get patient profile
router.put("/profile", updateProfile);                // Update patient profile
router.put("/profile/image", updateProfileImage);     // Update profile image
router.put("/profile/deactivate", deactivateAccount); // Deactivate account

/* ===========================
   🩺 Medical History
=========================== */
router.get("/medical-history", getMedicalHistory);    // Fetch medical history
router.put("/medical-history", updateMedicalHistory);  // Update medical history

/* ===========================
   🌿 Therapy Preferences
=========================== */
router.get("/therapy-preferences", getTherapyPreferences);
router.put("/therapy-preferences", updateTherapyPreferences);

/* ===========================
   🕒 Availability
=========================== */
router.get("/availability", getAvailability);
router.put("/availability", updateAvailability);

/* ===========================
   📅 Session Management
=========================== */
router.get("/sessions/upcoming", getUpcomingSessions); // Get upcoming sessions
router.get("/sessions/history", getSessionHistory);    // Get session history

/* ===========================
   📈 Progress Tracking
=========================== */
router.get("/progress", getProgress);

/* ===========================
   🔔 Notifications
=========================== */
router.get("/notifications", getNotifications);

export default router;
