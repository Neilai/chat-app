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
    select: false
  },
  friends: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    select: false,
    default: []
  },
  group: {
    type: [{ type: Schema.Types.ObjectId, ref: "Group" }],
    select: false,
    default: []
  },
  avatar: {
    type: String,
    default: "http://localhost:4455/uploads/default.jpeg"
  },
  gender: { type: String, enum: ["male", "female"], default: "male" }
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
