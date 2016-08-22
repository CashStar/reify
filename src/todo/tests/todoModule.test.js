import React from 'react';
import sinon from 'sinon';
import test from 'ava';

import { shallow } from 'enzyme';
import { Map } from 'immutable';

import reducer, { setState } from '../todoModule';
import todoLists from '../todoData';


const initialState = new Map(),
  defaultTodos = Map({ todos: todoLists }),
  action = {
    type: 'SET_STATE',
    state: defaultTodos
  };

// happy path - by default, our reducer should set the app state to our todoData
// when passed an empty Map for our initialState and a valid action
test('reducer handles SET_STATE when passed an empty Map', (t) => {
  const nextState = reducer(initialState, action);
  t.is(nextState, defaultTodos);
});

// our reducer should be able to handle an initialState that is undefined
test('reducer handles SET_STATE with an undefined initialState', (t) => {
  const nextState = reducer(undefined, action);
  t.is(nextState, defaultTodos);
});

// our reducer should be able to handle it when a plain JS object is passed
test('reducer handles SET_STATE with a plain JS object action.state', (t) => {
  // convert action.state to a plain JS object
  action.state = action.state.toJS();
  const nextState = reducer(initialState, action);

  // we can't do t.is(nextState, defaultTodos) here because of JS's completely
  // fucked up object equality situation, so we turn these into JS objects,
  // JSON.stringify() them and compare the resulting strings :(
  t.is(JSON.stringify(nextState.toJS()), JSON.stringify(defaultTodos.toJS()));
});
