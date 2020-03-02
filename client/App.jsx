import React,{useEffect} from "react";
import { Provider ,useDispatch} from "react-redux";
import {setAuth} from './store/user.redux'
import { GlobalStyle } from "./style";
import RenderRoutes from "./routes/renderRoutes";
import store from "./store/";
import routes from "./routes/index.js";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <RenderRoutes  routes={routes} />
      </HashRouter>
    </Provider>
  );
}

export default App;
