const mongoose = require("mongoose");
const db = "mongodb://localhost/chat";
const { resolve } = require("path");
const glob = require("glob");
let initSchemas = () => {
  glob.sync(resolve(__dirname, "**/*.js")).forEach(require);
};
let initAdmin = async () => {
  const User = mongoose.model("User");
  let user = await User.findOne({
    username: "Neil"
  });

  if (!user) {
    const user = new User({
      username: "Neil",
      password: "19971008"
    });

    await user.save();
  }
};

exports.connect = () => {
  let maxConnectTimes = 0;
  return new Promise((resolve, reject) => {
    mongoose.connect(db);
    mongoose.connection.on("disconnected", () => {
      maxConnectTimes++;
      if (maxConnectTimes < 5) {
        mongoose.connect(db);
      } else {
        throw new Error("数据库连接超时");
      }
    });
    mongoose.connection.on("error", err => {
      console.log(err);
      maxConnectTimes++;

      if (maxConnectTimes < 5) {
        mongoose.connect(db);
      } else {
        throw new Error("数据库连接出错");
      }
    });

    mongoose.connection.once("open", () => {
      initSchemas();
      initAdmin();
      resolve();
      console.log("数据库连接成功");
    });
  });
};
