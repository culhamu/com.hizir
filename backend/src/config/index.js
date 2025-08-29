import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/expertiz",
  jwtSecret: process.env.JWT_SECRET || "change_this_secret_in_prod",
  jwtExpires: process.env.JWT_EXPIRES || "7d",
  env: process.env.NODE_ENV || "development"
};
