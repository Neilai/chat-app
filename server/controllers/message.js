const { controller, get, put, post, auth } = require("../utils/decorator");
const Message = require("../db/message");

@controller("message")
export class userController {
  @get("")
  @auth
  async getAllMessages(ctx, next) {
    const messages = await Message.find({
      $or: [{ from: ctx.user._id }, { to: ctx.user._id }]
    });
    ctx.body = messages;
  }

  @put("")
  @auth
  async readMessage(ctx, next) {
      
  }
}
