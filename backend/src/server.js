import app from "./app.js";
import config from "./config/index.js";
import { connectDB } from "./config/db.js";
import logger from "./utils/logger.js";

const start = async () => {
  await connectDB();
  app.listen(config.port, () => {
    logger.info(`Server running on port ${config.port}`);
  });
};

start().catch((err) => {
  logger.error("Failed to start server", err);
  process.exit(1);
});
