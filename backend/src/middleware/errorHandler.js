import logger from "../utils/logger.js";
import config from "../config/index.js";

export default (err, req, res, next) => {
  logger.error(err.message || "Server error", { stack: err.stack });
  const status = err.status || 500;
  const payload = {
    message: err.message || "Internal Server Error"
  };
  if (config.env === "development") payload.stack = err.stack;
  res.status(status).json(payload);
};
