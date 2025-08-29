import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createReport, getVehicleReports } from "../controllers/reportController.js";

const router = express.Router();

router.post("/", protect, createReport);
router.get("/:vehicleId", protect, getVehicleReports);

export default router;
