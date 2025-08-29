import asyncHandler from "../utils/asyncHandler.js";
import * as reportService from "../services/reportService.js";

export const createReport = asyncHandler(async (req, res) => {
  const { vehicleId, findings, score, attachments } = req.body;
  const report = await reportService.createReport({
    vehicleId,
    inspectorId: req.user._id,
    findings,
    score,
    attachments
  });
  res.status(201).json(report);
});

export const getVehicleReports = asyncHandler(async (req, res) => {
  const { vehicleId } = req.params;
  const reports = await reportService.getReportsByVehicle(vehicleId);
  res.json({ count: reports.length, data: reports });
});
