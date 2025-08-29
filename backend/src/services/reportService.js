import Report from "../models/Report.js";
import Vehicle from "../models/Vehicle.js";

export const createReport = async ({ vehicleId, inspectorId, findings, score, attachments }) => {
  const vehicle = await Vehicle.findById(vehicleId);
  if (!vehicle) {
    const err = new Error("Vehicle not found");
    err.status = 404;
    throw err;
  }
  const report = new Report({
    vehicle: vehicle._id,
    inspector: inspectorId,
    findings,
    score,
    attachments,
    status: "completed"
  });
  await report.save();
  return report;
};

export const getReportsByVehicle = (vehicleId) =>
  Report.find({ vehicle: vehicleId }).populate("inspector", "name email").sort({ createdAt: -1 });
