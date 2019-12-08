const jwt = require("jsonwebtoken");
const Message = require("../db/message");
const Apply = require("../db/apply");
const User = require("../db/user");
let socketMap = new Map();
export const chat = async io => {
  io.use(function(socket, next) {
    var handshake = socket.request;
    let token = handshake._query.token;
    jwt.verify(token, "secret", function(err, decoded) {
      if (err) next(new Error("authentication error"));
      else {
        socketMap.set(decoded._id, socket.id);
        socket.user = decoded;
        socket.on("disconnect", () => {
          socketMap.delete(decoded.id);
          console.log("disconnected", socketMap);
        });
      }
    });
    next();
  });
  io.on("connection", async socket => {
    socket.on("message", async message => {
      console.log("msg", message);
      if (socketMap.has(message.to._id)) {
        io.sockets.connected[socketMap.get(message.to._id)].emit(
          "message",
          message
        );
      }
      await new Message({ ...message, read: false }).save();
    });
    socket.on("apply", async apply => {
      const match = await Apply.findOne(apply);
      console.log(apply);
      if (!match) {
        if (socketMap.has(apply.to._id)) {
          io.sockets.connected[socketMap.get(apply.to._id)].emit(
            "apply",
            apply
          );
        }
        await new Apply(apply).save();
      }
    });
    socket.on("newFriend", async ({ from, to, status }) => {
      const apply = await Apply.findOne({
        from: from._id,
        to: to._id
      }).populate("from to");
      apply.status = status;
      apply.save();
      if (status == "accept") {
        if (apply.to.friends.indexOf(apply.from._id) == -1) {
          apply.from.friends.push(to._id);
          apply.to.friends.push(from._id);
          await apply.from.save();
          await apply.to.save();
          let message = {
            from: apply.to,
            to: apply.from,
            content: "我通过了你的好友申请",
            type: "User",
            createdTime: new Date().getTime()
          };
          if (socketMap.has(apply.from._id)) {
            io.sockets.connected[socketMap.get(apply.from._id)].emit(
              "message",
              message
            );
          }
          await new Message({ ...message, read: false }).save();
        }
      }
    });
  });
};
