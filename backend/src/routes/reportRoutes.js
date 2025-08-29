import express from "express";
import { createReport, getVehicleReports } from "../controllers/reportController.js";
import validate from "../middleware/validateRequest.js";
import { reportCreateSchema } from "../validators/schemas.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);
router.post("/", validate(reportCreateSchema), createReport);
router.get("/vehicle/:vehicleId", getVehicleReports);

export default router;

