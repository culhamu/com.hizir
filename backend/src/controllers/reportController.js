import Report from "../models/Report.js";

export const createReport = async (req, res, next) => {
  try {
    const { vehicleId, findings, score } = req.body;
    const report = await Report.create({
      vehicle: vehicleId,
      inspector: req.user.id,
      findings,
      score,
      status: "completed"
    });
    res.status(201).json(report);
  } catch (err) {
    next(err);
  }
};

export const getVehicleReports = async (req, res, next) => {
  try {
    const { vehicleId } = req.params;
    const reports = await Report.find({ vehicle: vehicleId }).populate("inspector", "name");
    res.json(reports);
  } catch (err) {
    next(err);
  }
};
