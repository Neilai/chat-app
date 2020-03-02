import { fromJS } from "immutable";
import { userRequest } from "@/api/request";
const defaultState = fromJS({
  user: {}
});

export function user(state = defaultState, action) {
  switch (action.type) {
    case "SET_USER":
      return state.set("user", action.value);
    default:
      return state;
  }
}

const setFriends = v => ({
  type: "SET_USER",
  value: v
});

export const getUser = () => {
  return dispatch => {
    userRequest().then(res => {
      dispatch(setFriends(res))
    });
  };
};
