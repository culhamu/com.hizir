import Vehicle from "../models/Vehicle.js";

export const createVehicle = async (req, res, next) => {
  try {
    const { brand, model, year, plate } = req.body;
    const vehicle = await Vehicle.create({
      brand,
      model,
      year,
      plate,
      owner: req.user.id
    });
    res.status(201).json(vehicle);
  } catch (err) {
    next(err);
  }
};

export const getUserVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find({ owner: req.user.id });
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};
