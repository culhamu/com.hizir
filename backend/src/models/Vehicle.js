import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    plate: { type: String, required: true, unique: true, uppercase: true, trim: true },
    vin: { type: String, required: false, trim: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    metadata: { type: mongoose.Schema.Types.Mixed } // flexible for future fields
  },
  { timestamps: true }
);

vehicleSchema.index({ plate: 1 });

export default mongoose.model("Vehicle", vehicleSchema);
