const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const { Route } = require("../utils/decorator");
const { resolve } = require("path");
const cors =require('koa-cors')
export const addBodyParser = app => {
  app.use(bodyParser());
};

export const addLogger = app => {
  app.use(logger());
};
export const addCors = app => {
  app.use(
    cors({
      maxAge: 7 * 24 * 60 * 60,
      credentials: true,
      methods: "GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE",
      headers: "Content-Type, Accept, Authorization"
    })
  );
};
export const router = app => {
  const controllerPath = resolve(__dirname, "../controllers");
  const router = new Route(app, controllerPath);
  router.init();
};
