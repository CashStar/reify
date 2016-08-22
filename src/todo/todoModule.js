import { Map, fromJS } from 'immutable';


// Actions
const SET_STATE = 'reify/todo/todoModule/SET_STATE';

// Reducer
export default function reducer(state = new Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      // here, we're calling fromJS on action.state to convert it to an
      // Immutable Map before passing it to setState in case someone tries
      // to pass a plain JS object, instead... tsk, tsk!
      // yes, it's fine to call fromJS on something that's already Immutable
      return setState(state, fromJS(action.state));
  }
  return state;
}

// Action Creators
export function setState(state, newState){
  const nextState = state.merge(newState);
  return state.merge(newState);
}
