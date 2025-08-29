import express from "express";
import { createVehicle, listUserVehicles } from "../controllers/vehicleController.js";
import validate from "../middleware/validateRequest.js";
import { vehicleCreateSchema } from "../validators/schemas.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);
router.post("/", validate(vehicleCreateSchema), createVehicle);
router.get("/", listUserVehicles);

export default router;

