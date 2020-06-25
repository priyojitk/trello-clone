import { Schema, model } from "mongoose";

const ListSchema = new Schema({
  board_id: { type: Schema.Types.ObjectId, ref: "Board" },
  name: String,
});

export default model("List", ListSchema);
