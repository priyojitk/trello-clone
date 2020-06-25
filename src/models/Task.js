import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  list_id: { type: Schema.Types.ObjectId, ref: "List" },
  name: String,
  description: String,
});

export default model("Task", TaskSchema);
