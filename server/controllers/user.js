const { controller, get, put, post,auth } = require("../utils/decorator");
const User = require("../db/user");

const jwt = require("jsonwebtoken");

@controller("user")
export class userController {
  @post("login")
  async login(ctx, next) {
    const { username, password } = ctx.request.body;
    const user = await User.findOne({ username }).select("password");
    console.log(user);
    const match = user && (await user.comparePassword(password, user.password));

    if (!match) {
      return (ctx.body = {
        success: false,
        err: "用户不存在"
      });
    }

    if (match) {
      let token = jwt.sign(
        {
          _id: user.id,
          name: user.username
        },
        "secret",
        { expiresIn: 60 * 60 * 24 * 30 }
      );
      return (ctx.body = {
        success: true,
        token,
      });
    }

    return (ctx.body = {
      success: false,
      err: "密码不正确"
    });
  }

  @get("friends")
  @auth
  async getFriends(ctx,next){
    const user=await User.findById(ctx.user._id).populate("friends")
    ctx.body=user.friends;
  }
}
