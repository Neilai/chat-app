import { createContext } from "vm";

const Router = require("koa-router");
const { resolve } = require("path");
const glob = require("glob");
const symbolPrefix = Symbol("prefix");
const jwt = require("jsonwebtoken");
const routerMap = new Map();

const normalizePath = path => (path.startsWith("/") ? path : `/${path}`);

export class Route {
  constructor(app, apiPath) {
    this.app = app;
    this.apiPath = apiPath;
    this.router = new Router();
  }

  init() {
    glob.sync(resolve(this.apiPath, "./**/*.js")).forEach(require);

    for (let [conf, controllers] of routerMap) {
      let prefixPath = conf.target[symbolPrefix];
      if (prefixPath) prefixPath = normalizePath(prefixPath);
      const routerPath = prefixPath + conf.path;
      console.log(routerPath,controllers);
      this.router[conf.method](routerPath, ...controllers);
    }

    this.app.use(this.router.routes());
    this.app.use(this.router.allowedMethods());
  }
}

export const controller = path => target =>
  (target.prototype[symbolPrefix] = path);

const router = conf => (target, key, descriptor) => {
  conf.path = normalizePath(conf.path);
  target[key] = Array.isArray(target[key]) ? target[key] : [target[key]];
  routerMap.set(
    {
      target: target,
      ...conf
    },
    target[key]
  );
};
export const get = path =>
  router({
    method: "get",
    path: path
  });

export const post = path =>
  router({
    method: "post",
    path: path
  });

export const put = path =>
  router({
    method: "put",
    path: path
  });

export const del = path =>
  router({
    method: "delete",
    path: path
  });

export const use = path =>
  router({
    method: "use",
    path: path
  });

export const all = path =>
  router({
    method: "all",
    path: path
  });

const decorate = (args, middleware) => {
  let [target, key, descriptor] = args;
  target[key] = [middleware, target[key]];

  return descriptor;
};

const addController = middleware => (...args) => decorate(args, middleware);

export const auth = addController(async (ctx, next) => {
  const auth = ctx.get("Authorization");
  const token = auth.split(" ")[1];
  await jwt.verify(token, "secret", function(err, decoded) {
    if (err) ctx.throw(401, err);
    else {
        ctx.user=decoded
    }
  });
  await next();
});
