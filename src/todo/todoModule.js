import { Map } from 'immutable';

// Actions
/*const LOAD   = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';
*/
const SET_INITIAL_STATE = 'reify/todo/todoModule/SET_INITIAL_STATE';

// Reducer
/*export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}*/

export default function reducer(state = new Map(), action) {
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return setInitialState(state, action.state);
  }
  return state;
}

export function setInitialState(state, newState) {
  return state.merge(newState);
}

// Action Creators
/*export function loadWidget(widget) {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}*/
