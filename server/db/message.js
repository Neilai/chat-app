import { Schema, model } from "mongoose";
const messageSchema = new Schema(
  {
    from: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    to: {
      type: Schema.Types.ObjectId,
      refPath: 'type',
      required: true
    },
    read: {
      type: Boolean
    },
    content: { type: String },
    type: {
      type: String,
      required: true,
      enum: ["Group", "User"]
    }
  },
  { timestamps: true }
);
module.exports = model("Message", messageSchema);
