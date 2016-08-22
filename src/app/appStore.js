import createSagaMiddleware from 'redux-saga';

import { Map, fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { push, routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import appReducer from './appReducer';
import todoLists from '../todo/todoData';


const defaultState = new Map();
const middleware = [ routerMiddleware(browserHistory), createSagaMiddleware ];

// enhancers can be passed in to createStore for applying
// middleware and all kinds of things
const enhancers = compose(
  applyMiddleware(...middleware),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
);

// Create enhanced history object for react-router immutable compatibility
const createSelectLocationState = () => {
  let prevRoutingState, prevRoutingStateJS;
  return (state) => {
    const routingState = state.get('routing'); // or state.routing
    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }
    return prevRoutingStateJS;
  };
};

const appStore = createStore(appReducer, defaultState, enhancers);

// here, we sync our redux store with our browserHistory
export const appHistory = syncHistoryWithStore(browserHistory, appStore, {
  selectLocationState: createSelectLocationState()
});

// initialize our app state with sensible defaults
appStore.dispatch({
  type: 'SET_STATE',
  state: {
    todos: fromJS(todoLists)
  }
});

export default appStore;
