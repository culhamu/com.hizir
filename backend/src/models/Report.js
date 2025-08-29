import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle", required: true },
    inspector: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["draft", "pending", "completed"], default: "draft" },
    findings: { type: String, default: "" },
    score: { type: Number, min: 0, max: 100 },
    attachments: [{ url: String, label: String }],
    summary: { type: String }
  },
  { timestamps: true }
);

// quick population helper if needed
reportSchema.methods.toPublic = function () {
  return {
    id: this._id,
    vehicle: this.vehicle,
    inspector: this.inspector,
    status: this.status,
    findings: this.findings,
    score: this.score,
    createdAt: this.createdAt
  };
};

export default mongoose.model("Report", reportSchema);
