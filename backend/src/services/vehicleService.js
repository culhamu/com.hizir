import Vehicle from "../models/Vehicle";

export const createVehicle = async ({ brand, model, year, plate, vin, ownerId }) => {
  const exists = await Vehicle.findOne({ plate: plate.toUpperCase() });
  if (exists) {
    const err = new Error("Araç plakası zaten kayıtlı");
    err.status = 400;
    throw err;
  }
  const vehicle = new Vehicle({
    brand, model, year, plate: plate.toUpperCase(), vin, owner: ownerId
  });
  await vehicle.save();
  return vehicle;
};

export const getVehiclesForUser = (ownerId) =>
  Vehicle.find({ owner: ownerId }).sort({ createdAt: -1 });
