import asyncHandler from "../utils/asyncHandler.js";
import * as vehicleService from "../services/vehicleService.js";

export const createVehicle = asyncHandler(async (req, res) => {
  const payload = { ...req.body, ownerId: req.user._id };
  const vehicle = await vehicleService.createVehicle(payload);
  res.status(201).json(vehicle);
});

export const listUserVehicles = asyncHandler(async (req, res) => {
  const vehicles = await vehicleService.getVehiclesForUser(req.user._id);
  res.json({ count: vehicles.length, data: vehicles });
});
