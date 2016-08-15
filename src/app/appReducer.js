import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';

import routerReducer from './routerReducer';


import todoReducer from '../todo/todoModule';


/*
 * Combine all of our reducers into a root-level reducer
 * This combineReducers() is the redux-immutable one, not the redux one
 */
const appReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  todo: todoReducer
});

export default appReducer;
