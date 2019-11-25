const jwt = require("jsonwebtoken");
const  Message  = require("../db/message");
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
      if (socketMap.has(message.to._id)) {
        io.sockets.connected[socketMap.get(message.to._id)].emit(
          "message",
          message
        );
        await new Message({ ...message, read: true }).save();
      } else {
        await new Message({ ...message, read: false }).save();
      }
    });
  });
};
