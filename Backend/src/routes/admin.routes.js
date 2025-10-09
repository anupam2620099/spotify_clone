import express from "express";
import * as adminController from "../controllers/admin.controller.js";
import { verifyAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

// ----- Dashboard & Center -----
router.get("/dashboard", verifyAdmin, adminController.getDashboard);
router.get("/centers/:id/overview", verifyAdmin, adminController.getCenterOverview);
router.put("/centers/:id/settings", verifyAdmin, adminController.updateCenterSettings);

// ----- Practitioners -----
router.get("/practitioners", verifyAdmin, adminController.getAllPractitioners);
router.put("/practitioners/:id", verifyAdmin, adminController.updatePractitioner);
router.post("/practitioners/:id/deactivate", verifyAdmin, adminController.deactivatePractitioner);
router.get("/practitioners/:id/analysis", verifyAdmin, adminController.getPractitionerAnalysis);

// ----- Patients -----
router.get("/patients", verifyAdmin, adminController.getAllPatients);
router.put("/patients/:id", verifyAdmin, adminController.updatePatient);
router.post("/patients/:id/deactivate", verifyAdmin, adminController.deactivatePatient);

// ----- Sessions -----
router.get("/sessions", verifyAdmin, adminController.getAllSessions);
router.post("/sessions/force", verifyAdmin, adminController.forceBookSession);
router.post("/sessions/:id/reassign", verifyAdmin, adminController.reassignPractitioner);

// ----- Notifications -----
router.post("/notifications/broadcast", verifyAdmin, adminController.sendBroadcastNotification);

// ----- Audit Logs -----
router.get("/audit-logs", verifyAdmin, adminController.getAuditLogs);

export default router;
