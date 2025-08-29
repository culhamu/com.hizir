import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/appointments", appointmentRoutes);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
