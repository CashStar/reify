import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
import { Map } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import todoReducer from '../todo/todoModule';


// custom reducer for getting react-router and Immutable to play nice
const initialState = new Map({
    locationBeforeTransitions: null
});

const routerReducer = (state = initialState, action) => {
    if (action.type === LOCATION_CHANGE) {
        return state.merge({
            locationBeforeTransitions: action.payload
        });
    }

    return state;
};

/*
 * Combine all of our reducers into a root-level reducer
 * This combineReducers() is the redux-immutable one, not the redux one!
 * It makes our entire state tree an Immutable Map
 */
const appReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  todoReducer
});

export default appReducer;
