import { Schema, model } from "mongoose";
const applySchema = new Schema(
  {
    from: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    to: {
      type: Schema.Types.ObjectId,
      ref:  "User",
      required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["accept","reject","sending"]
    },
  },
  { timestamps: true }
);
module.exports = model("Apply", applySchema);