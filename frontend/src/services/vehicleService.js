import api from "./api.js";

const getUserVehicles = async () => {
  const res = await api.get("/vehicles");
  return res.data;
};

const createVehicle = async (data) => {
  const res = await api.post("/vehicles", data);
  return res.data;
};

export default { getUserVehicles, createVehicle };
