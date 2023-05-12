import { Schema, model } from "mongoose";

const ReportSchema = new Schema({
  title: { type: String, required: true },
  status: { type: Number, required: true, enum: [0, 1, 2, 3] },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  agency: { type: String, required: true },
  officers: {
    type: [
      {
        name: { type: String, required: true },
        rank: { type: String, required: true },
        note: { type: String, required: false },
      },
    ],
  },
  civilians: {
    type: [
      {
        name: { type: String, required: true },
        note: { type: String, required: false },
        type: { type: String, required: true },
      },
    ],
  },
  narrative: { type: String, required: true },
  evidence: {
    type: [
      {
        type: { type: String, required: true },
        note: { type: String, required: true },
      },
    ],
  },
  summary: { type: String, required: true },
});

export default model("Report", ReportSchema);
