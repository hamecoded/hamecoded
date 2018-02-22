import { createStore, compose, applyMiddleware } from 'redux';

// middlewares
import apiMiddleware from './middlewares/apiMiddleware';

// root reducer
import rootReducer from './reducers/rootReducer';

const middlewares = [
  apiMiddleware
];

const storeEnhancers = compose(
  applyMiddleware(...middlewares)
);

const initialState = {};
const store = createStore(rootReducer, initialState, storeEnhancers);

export default store;