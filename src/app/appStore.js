import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import appReducer from './appReducer';


const defaultState = {};
const middleware = {};

// enhancers can be passed in to createStore for applying
// middle ware and all kinds of things
const enhancers = compose(
  // applyMiddleware(...middleware),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
);

const appStore = createStore(appReducer, defaultState, enhancers);

// here, we sync our redux store with our browserHistory
export const appHistory = syncHistoryWithStore(browserHistory, appStore);

export default appStore;
