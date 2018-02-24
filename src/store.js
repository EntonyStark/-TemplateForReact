import { createStore, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import logger from "redux-logger";

import reducers from "./reducers";

export const history = createHistory();

export const store = createStore(
  reducers,
  applyMiddleware(
  	logger, 
  	routerMiddleware(history)
  )
);