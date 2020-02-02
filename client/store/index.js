import { user } from "./user.redux";
import { chat } from "./chat.redux";
import { combineReducers } from 'redux-immutable'
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({ user, chat });
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
