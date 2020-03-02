const Koa = require("koa");
const app = new Koa();
const middlewares = require("./middlewares");
const server = require("http").createServer(app.callback());
import onerror from "koa-onerror";
onerror(app)

Object.values(middlewares).map(f => f(app));

const io = require("socket.io")(server);
const { chat } = require("./service/chat");
const { connect } = require("./db");

chat(io);
connect();
server.listen(4455);
