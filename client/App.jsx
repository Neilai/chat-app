import React from "react";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style";
import renderRoutes from "./routes/renderRoutes";
import store from "./store/";
import routes from "./routes/index.js";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
