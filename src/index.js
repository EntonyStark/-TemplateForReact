import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { CookiesProvider } from "react-cookie";
import { store, history } from "./store";
import Routes from "./router";

import "./style/index.scss";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <CookiesProvider>
        <Routes />
      </CookiesProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
