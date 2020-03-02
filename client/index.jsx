import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'))



// import io from "socket.io-client";
// //admin
// let x = io("ws://localhost:4455", {
//   query:
//     "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRiZTg2OGRiNGVmMmU2ZDQ3ZGExYWMiLCJpYXQiOjE1ODMwNTk2NzQsImV4cCI6MTU4NTY1MTY3NH0.tF8ewc2oj3EM2TWoXmFxfgvMA4YLwpZJi3UWbpHoPjM"
// });
// //neil
// let y = io("ws://localhost:4455", {
//   query:
//     "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRiZTg2OGRiNGVmMmU2ZDQ3ZGExYWIiLCJpYXQiOjE1ODMwNTk2MTUsImV4cCI6MTU4NTY1MTYxNX0.2gdHv0MzSt_nRDQeoIngEHxX-EkMlNmbZRGYRYJTLHA"
// });
// let y2x = {
//   from: "5ddbe868db4ef2e6d47da1ab",
//   to: "5ddbe868db4ef2e6d47da1ac" ,
//   content: "y2x!!!!",
//   type: "User",
// };
// let x2y = {
//   from: "5ddbe868db4ef2e6d47da1ac" ,
//   to: "5ddbe868db4ef2e6d47da1ab" ,
//   content: "x2y!!!!!!",
//   type: "User",
// };
// let Neil={
//   name:"Neil",
//   _id:"5ddbe868db4ef2e6d47da1ab"
// }
// let admin={
//   name:"admin",
//   _id:"5ddbe868db4ef2e6d47da1ac"
// }
// let apply = {
//   from: admin,
//   to: Neil,
//   status: "sending"
// };
// x.on("message", data => {
//   console.log("x recieve: ", data);
// });
// y.on("message", data => {
//   console.log("y recieve: ", data);
// });
// y.emit("message", y2x);
// x.emit("message", x2y);
// x.emit("apply", apply);
// y.on("apply", apply => {
//   apply.status = "accept";
//   y.emit("deposeApply", apply);
// });
