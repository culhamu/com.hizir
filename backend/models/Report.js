import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
    carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },
    expertId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    details: {
        motor: { type: String, required: true },
        kaporta: { type: String, required: true },
        boyaDurumu: { type: String, required: true },
        km: { type: Number, required: true },
        lastikler: { type: String },
        elektronik: { type: String }
    },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Report", ReportSchema);
