import { Schema, model } from "mongoose";

const BoardSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("Board", BoardSchema);
