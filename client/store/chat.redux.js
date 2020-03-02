import { fromJS } from "immutable";
import { getAllFriends, applyRequest, readRequest } from "@/api/request";
import io from "socket.io-client";
import messages from "../pages/messages";

let socket = io("ws://localhost:4455", {
  query: `token=${localStorage.token}`
});
const defaultState = fromJS({
  friends: [],
  apply: [],
  unread: []
});

export function chat(state = defaultState, action) {
  let index;
  switch (action.type) {
    case "SET_READ":
      index = state.get("friends").findIndex(v => {
        return v.get("_id") == action.value;
      });
      return state.updateIn(["friends", index, "messages"], v => {
        return v.map(x => x.set("read", true));
      });
    case "SET_UNREAD":
      return state.set(
        "unread",
        state.get("friends").map(v => {
          return v.get("messages").filter(x => {
            return x.get("from") == v.get("_id") && !x.get("read");
          }).size;
        })
      );
    case "SET_FRIENDS":
      return state.set("friends", fromJS(action.value));
    case "CHANGE_FRIENDS":
      index = state.get("friends").findIndex(v => {
        return v.get("_id") == action.to || v.get("_id") == action.from;
      });
      return state
        .updateIn(["friends", index, "messages"], v =>
          v.unshift(fromJS(action.value))
        )
        .updateIn(["friends", index], v =>
          v.set("lastTime", +action.value.createdAt)
        );
    case "SET_APPLY":
      return state.set("apply", fromJS(action.value));
    case "CHANGE_APPLY":
      return state.update("apply", v => v.unshift(fromJS(action.value)));
    case "DELETE_APPLY":
      return state.update("apply", v => v.delete(action.value));
    default:
      return state;
  }
}
const setFriends = v => ({
  type: "SET_FRIENDS",
  value: v
});

const changeApply = v => ({
  type: "CHANGE_APPLY",
  value: v
});

const changeFriends = v => ({
  type: "CHANGE_FRIENDS",
  value: v
});

const setApply = v => ({
  type: "SET_APPLY",
  value: v
});

const deleteApply = v => ({
  type: "DELETE_APPLY",
  value: v
});

const setUnread = v => ({
  type: "SET_UNREAD",
  value: v
});

const setRead = v => ({
  type: "SET_READ",
  value: v
});

export const getApply = () => {
  return dispatch => {
    applyRequest().then(res => {
      dispatch(setApply(res));
    });
  };
};

export const sendMessage = v => {
  return dispatch => {
    console.log("message !!", v);
    socket.emit("message", v);
    dispatch(changeFriends(v));
  };
};

export const getAllMessages = () => {
  return dispatch => {
    getAllFriends().then(res => {
      dispatch(setFriends(res));
      dispatch(setUnread());
    });
  };
};

export const listenMessages = () => {
  return dispatch => {
    socket.on("message", msg => {
      console.log("接收到消息", msg);
      dispatch(changeFriends(msg));
      dispatch(setUnread());
    });
  };
};

export const doRead = id => {
  return dispatch => {
    readRequest(id).then(() => {
      dispatch(setRead(id));
      dispatch(setUnread());
    });
  };
};

export const sendApply = apply => {
  return dispatch => {
    socket.emit("apply", apply);
  };
};

export const deposeApply = (apply,index) => {
  return dispatch => {
    socket.emit("deposeApply", apply);
    dispatch(deleteApply(index));
    dispatch(getAllMessages())
  };
};

export const listenApply = () => {
  return dispatch => {
    console.log("listen begin ");
    socket.on("apply", apply => {
      console.log("收到apply", apply);
      dispatch(changeApply(apply));
    });
  };
};
