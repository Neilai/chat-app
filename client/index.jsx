import React from "react";
import io from "socket.io-client";
let x = io("ws://localhost:4455", {
  query:
    "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRiZTg2OGRiNGVmMmU2ZDQ3ZGExYWMiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1NzQ2OTM4MDcsImV4cCI6MTU3NzI4NTgwN30.HQx7X63i_oFkdldnvx5NqLMJ0HP7b5ZjsG0JCR53Sh4"
});
let y = io("ws://localhost:4455", {
  query:
    "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRiZTg2OGRiNGVmMmU2ZDQ3ZGExYWIiLCJuYW1lIjoiTmVpbCIsImlhdCI6MTU3NDY5Mzg1NiwiZXhwIjoxNTc3Mjg1ODU2fQ.XULHrXNVE27StqWtt7_qi_P5vKUwbIt0-qhiCvnpDmk"
});
let x2y = {
  from: { _id: "5ddbe868db4ef2e6d47da1ab" },
  to: { _id: "5ddbe868db4ef2e6d47da1ac" },
  content: "sdsasdsasds"
};
let y2x = {
  to: { _id: "5ddbe868db4ef2e6d47da1ab" },
  from: { _id: "5ddbe868db4ef2e6d47da1ac" },
  content: "sdsasdsasds"
};
x.on("message", data => {
  console.log("x recieve: ",data);
});
y.on("message", data => {
  console.log("y recieve: ", data);
});

x.emit("message", x2y);
y.emit("message", y2x);
