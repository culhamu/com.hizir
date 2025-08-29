import api from "./api.js";

const login = async (data) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

const register = async (data) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

export default { login, register };
