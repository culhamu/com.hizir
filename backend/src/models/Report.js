import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle", required: true },
    inspector: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["pending", "completed"], default: "pending" },
    findings: { type: String },
    score: { type: Number, min: 0, max: 100 }
  },
  { timestamps: true }
);

export default mongoose.model("Report", reportSchema);
