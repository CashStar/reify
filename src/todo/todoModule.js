import { Map, fromJS } from 'immutable';


// Actions
const SET_STATE       = 'reify/todo/todoModule/SET_STATE';
const TOGGLE_COMPLETE = 'reify/todo/todoModule/TOGGLE_COMPLETE';

// Reducers
export default function reducer(state = new Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, fromJS(action.state));
    case 'TOGGLE_COMPLETE':
      return toggleComplete(state, action.listId, action.taskId);
    default: return state;
  }
}

function setState(state, newState) {
  return state.merge(newState);
}

function toggleComplete(state, listId, taskId) {
  const todoLists = state.get('todos');

  const listIndex = todoLists.findIndex(
    (list) => list.get('id') === listId
  );

  const taskIndex = todoLists.get(listIndex).get('tasks').findIndex(
    (task) => task.get('id') === taskId
  );

  const updatedTask = state
    .get('todos')
    .get(listIndex)
    .get('tasks')
    .get(taskIndex)
    .update('status', (status) => status === 'active' ? 'completed' : 'active');

  return state.update('todos', (todos) => todos
    .setIn([listIndex, 'tasks', taskIndex], updatedTask));
}

// Action Creators
export function setInitialState(newState) {
  return { type: SET_STATE, newState };
}

export function toggleStatus(taskId, listId) {
  return { type: TOGGLE_COMPLETE, taskId, listId };
}
