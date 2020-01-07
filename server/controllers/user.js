const { controller, get, put, post, auth } = require("../utils/decorator");
const User = require("../db/user");
const Message = require("../db/message");

const jwt = require("jsonwebtoken");

@controller("user")
export class userController {
  @post("login")
  async login(ctx, next) {
    const { username, password } = ctx.request.body;
    const user = await User.findOne({ username }).select("password");
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
        token
      });
    }

    return (ctx.body = {
      success: false,
      err: "密码不正确"
    });
  }

  @get("friends")
  @auth
  async getFriends(ctx, next) {
    const user = await User.findById(ctx.user._id)
      .select("friends")
      .populate("friends");
    var friends = [];
    await Promise.all(
      user.friends.map(async e => {
        let messages = await Message.find({
          $or: [
            {
              from: e._id,
              to: user._id
            },
            {
              to: e._id,
              from: user._id
            }
          ]
        });
        e = e.toObject();
        e.messages = messages.reverse();
        e.lastTime=+messages[0].createdAt
        friends.push(e);
      })
    );
    ctx.body = friends;
  }

  @get("friends/:id")
  @auth
  async getFriend(ctx, next) {
    let user = await User.findById(ctx.user._id).select("friends");
    if (user.friends.indexOf(ctx.params.id) != -1) {
      let friend = await User.findById(ctx.params.id);
      let messages = await Message.find({
        $or: [
          { from: ctx.user._id, to: ctx.params.id },
          { to: ctx.user._id, from: ctx.params.id }
        ]
      });
      friend = friend.toObject();
      friend.messages = messages.reverse();
      friend.lastTime=+messages[0].createdAt
      ctx.body = friend;
    } else {
      ctx.body = "错误";
    }
  }
}
