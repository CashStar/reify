import React from 'react';
import sinon from 'sinon';
import test from 'ava';

import { shallow } from 'enzyme';
import { Map } from 'immutable';

import reducer, { setState } from '../todoModule';
import todoLists from '../todoData';


const initialState = new Map(),
  defaultTodos = Map({ todos: todoLists });

// happy path - by default, our reducer should set the app state to our todoData
// when passed an empty Map for our initialState and a valid action
test('reducer handles SET_STATE when passed an empty Map', (t) => {
  const action = {
    type: 'SET_STATE',
    state: defaultTodos
  };

  const nextState = reducer(initialState, action);
  t.is(nextState, defaultTodos);
});

// our reducer should be able to handle an initialState that is undefined
test('reducer handles SET_STATE with an undefined initialState', (t) => {
  const action = {
    type: 'SET_STATE',
    state: defaultTodos
  };

  const nextState = reducer(undefined, action);
  t.is(nextState, defaultTodos);
});

// our reducer should be able to handle it when a plain JS object is passed
test('reducer handles SET_STATE with a plain JS object action.state', (t) => {
  const action = {
    type: 'SET_STATE',
    state: defaultTodos
  };

  // convert action.state to a plain JS object
  action.state = action.state.toJS();
  const nextState = reducer(initialState, action);

  // we can't do t.is(nextState, defaultTodos) here because of JS's
  // object equality situation, so we turn these into JS objects,
  // JSON.stringify() them and compare the resulting strings :(
  t.is(JSON.stringify(nextState.toJS()), JSON.stringify(defaultTodos.toJS()));
});

// our reducer should be able to change a todo item's status
test('reducer handles TOGGLE_COMPLETE the task status', (t) => {
  // initialize our state
  let action = {
    type: 'SET_STATE',
    state: defaultTodos
  };

  const newState = reducer(initialState, action);

  // set up our TOGGLE_COMPLETE action
  action = {
    type: 'TOGGLE_COMPLETE',
    listId: 1,
    taskId: 1
  };

  const listIndex = defaultTodos
    .get('todos')
    .findIndex(
      (list) => list.get('id') === action.listId
    );

  const taskIndex = defaultTodos
    .get('todos')
    .get(listIndex)
    .get('tasks')
    .findIndex(
      (task) => task.get('id') === action.taskId
    );

  // given a TOGGLE_COMPLETE action
  // when we call our reducer
  let nextState = reducer(newState, action),
    taskStatus = nextState
      .get('todos')
      .get(listIndex)
      .get('tasks')
      .get(taskIndex)
      .get('status');

  // then our task status should be 'completed'
  t.is(taskStatus, 'completed');

  // given a TOGGLE_COMPLETE action
  // when we call our reducer again
  nextState = reducer(nextState, action),
    taskStatus = nextState
      .get('todos')
      .get(listIndex)
      .get('tasks')
      .get(taskIndex)
      .get('status');

  // then our task status should be 'active'
  t.is(taskStatus, 'active');

});
