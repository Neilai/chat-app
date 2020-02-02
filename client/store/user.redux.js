import { fromJS } from "immutable";

const defaultState = fromJS({
  user: {}
});

export function user(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
