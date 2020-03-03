import { fromJS } from "immutable";
import { userRequest, updateRequest } from "@/api/request";
const defaultState = fromJS({
  user: {},
  authed: false
});

export function user(state = defaultState, action) {
  switch (action.type) {
    case "SET_AUTH":
      return state.set("authed", action.value);
    case "SET_USER":
      return state.set("user", action.value);
    default:
      return state;
  }
}
export const setAuth = v => ({
  type: "SET_AUTH",
  value: v
});

const setFriends = v => ({
  type: "SET_USER",
  value: v
});

export const getUser = () => {
  return dispatch => {
    userRequest().then(res => {
      dispatch(setFriends(res));
    });
  };
};

export const changeInfo = v => {
  return dispatch => {
    updateRequest(v).then(() => {
      dispatch(getUser());
    });
  };
};
