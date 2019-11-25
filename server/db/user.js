import { Schema, model } from "mongoose";
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  username: {
    unique: true,
    required: true,
    type: String
  },
  password: {
    type: String,
    required: true,
  },
  friends: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    default: []
  },
  group: {
    type: [{ type: Schema.Types.ObjectId, ref: "Group" }],
    default: []
  }
});

userSchema.pre("save", function(next) {
  if (!this.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (error, hash) => {
      if (error) return next(error);

      this.password = hash;
      next();
    });
  });
});
userSchema.methods = {
  comparePassword: (_password, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, (err, isMatch) => {
        if (!err) resolve(isMatch);
        else reject(err);
      });
    });
  }
};

module.exports = model("User", userSchema);
