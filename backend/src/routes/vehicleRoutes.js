import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createVehicle, getUserVehicles } from "../controllers/vehicleController.js";

const router = express.Router();

router.post("/", protect, createVehicle);
router.get("/", protect, getUserVehicles);

export default router;
