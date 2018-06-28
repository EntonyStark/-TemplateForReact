import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
// import logger from "redux-logger";

import reducers from './reducers';
import rootSaga from './sagas';

// const composeEnhancers = process.env.NODE_ENV === 'development'
// 	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// 	: null || compose;

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	reducers,
	// composeEnhancers(
	applyMiddleware(
		// logger,
		sagaMiddleware,
		routerMiddleware(history),
	),
	// ),
);

sagaMiddleware.run(rootSaga);
