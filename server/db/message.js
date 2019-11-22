import { Schema ,model} from "mongoose";
const messageSchema = new Schema(
  {
    from: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    to: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);
module.exports = model("Message", messageSchema);
