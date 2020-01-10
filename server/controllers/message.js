const { controller, get, put, post, auth } = require("../utils/decorator");
const Message = require("../db/message");

@controller("message")
export class messageController {
  @put("/:id")
  @auth
  async readMessage(ctx, next) {
    console.log(ctx.user._id, ctx.params.id);
    let res = await Message.update(
      {
        $or: [
          { from: ctx.user._id, to: ctx.params.id, read: false },
          { to: ctx.user._id, from: ctx.params.id, read: false }
        ]
      },
      {
        $set: {
          read: true
        }
      },
      { multi: true }
    );
    ctx.body = res;
  }
}
