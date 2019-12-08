const { controller, get, put, post, auth } = require("../utils/decorator");
const Apply = require("../db/apply");
const User = require("../db/user");
@controller("user")
export class userController {
  @get("apply")
  @auth
  async getApply(ctx, next) {
    const applies = await Apply.find({
      $or: [{ from: ctx.user._id }, { to: ctx.user._id }]
    });
    ctx.body = { applies };
  }

  @put("apply")
  @auth
  async updateApply(ctx, next) {
    const { _id, status } = ctx.request.body;
    const apply = await Apply.findByIdAndUpdate(_id, { status: status });
    console.log(ctx.user);
    const user = await User.findById(ctx.user._id);
    if (status == "accept") {
      if (!user.friends.includes[apply.from]) {
        user.friends.push(apply.from);
        user.save();
      }
    }
    ctx.body = apply;
  }
}
