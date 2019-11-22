const jwt = require("jsonwebtoken");
let socketMap = new Map();
export const chat = io => {
  io.use(function(socket, next) {
    var handshake = socket.request;
    let token = handshake._query.token;
    jwt.verify(token, "secret", function(err, decoded) {
      if (err) next(new Error("authentication error"));
      else {
        socketMap.set(decoded.id, socket.id);
        socket.user = decoded;
        socket.on("disconnect", () => {
          socketMap.delete(decoded.id);
          console.log("disconnected", socketMap);
        });
      }
    });
    next();
  });
  io.on("connection", function(socket) {
    console.log("connected", socketMap);
  });
};
