import { fromJS } from "immutable";

const defaultState = fromJS({
  friends: [],
  apply: []
});

export function chat(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
