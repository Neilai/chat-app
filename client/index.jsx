import React from "react";
import io from "socket.io-client";
//admin
let x = io("ws://localhost:4455", {
  query:
    "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRiZTg2OGRiNGVmMmU2ZDQ3ZGExYWMiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1NzQ2OTM4MDcsImV4cCI6MTU3NzI4NTgwN30.HQx7X63i_oFkdldnvx5NqLMJ0HP7b5ZjsG0JCR53Sh4"
});
//neil
let y = io("ws://localhost:4455", {
  query:
    "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRiZTg2OGRiNGVmMmU2ZDQ3ZGExYWIiLCJuYW1lIjoiTmVpbCIsImlhdCI6MTU3NDY5Mzg1NiwiZXhwIjoxNTc3Mjg1ODU2fQ.XULHrXNVE27StqWtt7_qi_P5vKUwbIt0-qhiCvnpDmk"
});
let y2x = {
  from: { _id: "5ddbe868db4ef2e6d47da1ab" },
  to: { _id: "5ddbe868db4ef2e6d47da1ac" },
  content: "sdsasdsasds",
  type: "User",
  createdAt: new Date().getTime()
};
let x2y = {
  from: { _id: "5ddbe868db4ef2e6d47da1ac" },
  to: { _id: "5ddbe868db4ef2e6d47da1ab" },
  content: "sdsasdsasds",
  type: "User",
  createdAt: new Date().getTime()
};
let apply = {
  to: { _id: "5ddbe868db4ef2e6d47da1ab" },
  from: { _id: "5ddbe868db4ef2e6d47da1ac" },
  createdAt: new Date().getTime(),
  status: "sending"
};
x.on("message", data => {
  console.log("x recieve: ", data);
});
y.on("message", data => {
  console.log("y recieve: ", data);
});

// x.emit("message", x2y);
// y.emit("message", y2x);
x.emit("apply", apply);
y.on("apply", apply => {
  apply.status = "accept";
  y.emit("newFriend", apply);
});
