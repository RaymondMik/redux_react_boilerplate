import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

const loggerMiddleware = createLogger();
const middlewares: any = [];
let store: any;

// add logger middleware in development only
if (process.env.NODE_ENV === 'development') middlewares.push(loggerMiddleware);

/**
 * Initialize the store
 * @returns {Object} Redux store.
 */
const initStore = () => {
	store = createStore(
		reducers,
		composeWithDevTools(
			applyMiddleware(...middlewares)
		)
	);

	// Webpack Hot Module Replacement API - runs only in development
	// if (process.env.NODE_ENV === 'development' && module.hot) {
	// 	module.hot.accept('../reducers', () => {
	// 	  const nextReducers = require('../reducers').default;
	// 	  store.replaceReducer(nextReducers);
	// 	});
	// }

	return store;
};

export { initStore, store };