const { controller, get, put, post, auth } = require("../utils/decorator");
const Apply = require("../db/apply");

@controller("apply")
export class applyController {
  @get("")
  @auth
  async getApply(ctx, next) {
    console.log(ctx.user);
    let res = await Apply.find({ to: ctx.user._id ,status:"sending"}).populate("from to");
    ctx.body = res;
  }
}
