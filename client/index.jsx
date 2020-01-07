import React from "react";
import io from "socket.io-client";
//admin
let x = io("ws://localhost:4455", {
  query:
    "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRiZTg2OGRiNGVmMmU2ZDQ3ZGExYWMiLCJpYXQiOjE1NzgxMjAzMjEsImV4cCI6MTU4MDcxMjMyMX0.xaxvMxiemi14tJ7n2mBl8wZOjTe14EKjLFsYS7r3H-A"
});
//neil
let y = io("ws://localhost:4455", {
  query:
    "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRiZTg2OGRiNGVmMmU2ZDQ3ZGExYWIiLCJpYXQiOjE1NzgxMjU4OTUsImV4cCI6MTU4MDcxNzg5NX0.NeSo2KuyZWXXWzl99IYJjOYHYjA0WOZK8Ruw2amDIVw"
});
let y2x = {
  from: { _id: "5ddbe868db4ef2e6d47da1ab" },
  to: { _id: "5ddbe868db4ef2e6d47da1ac" },
  content: "y2x",
  type: "User",
};
let x2y = {
  from: { _id: "5ddbe868db4ef2e6d47da1ac" },
  to: { _id: "5ddbe868db4ef2e6d47da1ab" },
  content: "x2y",
  type: "User",
};
let Neil={
  name:"Neil",
  _id:"5ddbe868db4ef2e6d47da1ab"
}
let admin={
  name:"admin",
  _id:"5ddbe868db4ef2e6d47da1ac"
}
let apply = {
  from: admin,
  to: Neil,
  status: "sending"
};
x.on("message", data => {
  console.log("x recieve: ", data);
});
y.on("message", data => {
  console.log("y recieve: ", data);
});
y.emit("message", y2x);
x.emit("message", x2y);
// x.emit("apply", apply);
// y.on("apply", apply => {
//   apply.status = "accept";
//   y.emit("deposeApply", apply);
// });
