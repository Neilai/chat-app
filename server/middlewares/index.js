const logger = require("koa-logger");
const { Route } = require("../utils/decorator");
const { resolve } = require("path");
const cors = require("koa-cors");
const koaBody = require("koa-body");
const path = require("path");
const koaStatic = require("koa-static");
import bodyParser from 'koa-bodyparser'

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

export const addStatic = app => {
  app.use(koaStatic(path.resolve(__dirname, "../public")));
};

export const addLogger = app => {
  app.use(logger());

};

export const addBody = app => {
  app.use(
    koaBody({
      multipart: true,
      formidable: {
        uploadDir: path.resolve(__dirname, "../public/uploads"),
        keepExtensions: true
      }
    })
  );
};

export const router = app => {
  console.log("router");
  const controllerPath = resolve(__dirname, "../controllers");
  const router = new Route(app, controllerPath);
  router.init();
};
